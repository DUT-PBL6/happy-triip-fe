import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { City, Route, RouteDto, Station, Transport } from "_api";
import { validate } from "src/app/share/helpers/form.helper";
import { TranslateService } from "@ngx-translate/core";
import { Option } from "src/app/core/interfaces/option.interface";
import { Select, Store } from "@ngxs/store";
import { TransportState } from "src/app/core/service/transport/transport.state";
import { GetAllTransport } from "src/app/core/service/transport/transport.action";
import { Observable } from "rxjs";
import { StationState } from "src/app/core/service/station/station.state";
import { GetAllStation } from "src/app/core/service/station/station.action";
import { formatDate, getTime } from "src/app/share/helpers/date.helper";

@Component({
  selector: "app-route-form",
  templateUrl: "./route-form.component.html",
  styleUrls: ["./route-form.component.scss"],
})
export class RouteFormComponent implements OnInit {
  @Input() selectedRoute: Route;
  @Input() updateMode: boolean;
  @Output() cancelRouteForm = new EventEmitter<boolean>();
  @Output() form = new EventEmitter<RouteDto>();
  @Select(TransportState.getAllTransport) public transports$: Observable<Transport[]>;
  @Select(StationState.getAllStation) public stations$: Observable<Station[]>;
  public routeForm: FormGroup;
  public pickUpPointForm: FormArray;
  public minDate = new Date();

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    if (this.store.selectSnapshot(TransportState.getAllTransport).length === 0)
      this.store.dispatch(new GetAllTransport());
    if (this.store.selectSnapshot(StationState.getAllStation).length === 0) this.store.dispatch(new GetAllStation());

    this.initPickUpPointForm();
    this.initRouteForm();
  }

  private initRouteForm(): void {
    this.routeForm = this.fb.group({
      name: ["", Validators.required],
      departAt: ["", Validators.required],
      arriveAt: ["", Validators.required],
      fromAt: this.fb.group({
        id: ["", Validators.required],
      }),
      toAt: this.fb.group({
        id: ["", Validators.required],
      }),
      pickUpPoint: this.pickUpPointForm,
      routeSchedules: ["", Validators.required],
      price: ["", Validators.required],
      transport: this.fb.group({
        id: ["", Validators.required],
      }),
    });
  }

  private initPickUpPointForm(): void {
    this.pickUpPointForm = this.fb.array([]);
  }

  public get name(): FormControl {
    return this.routeForm.get("name") as FormControl;
  }

  public get departAt(): FormControl {
    return this.routeForm.get("departAt") as FormControl;
  }

  public get arriveAt(): FormControl {
    return this.routeForm.get("arriveAt") as FormControl;
  }

  public get fromAt(): FormGroup {
    return this.routeForm.get("fromAt") as FormGroup;
  }

  public get toAt(): FormGroup {
    return this.routeForm.get("toAt") as FormGroup;
  }

  public get pickUpPoint(): FormArray {
    return this.routeForm.get("pickUpPoint") as FormArray;
  }

  public get routeSchedules(): FormControl {
    return this.routeForm.get("routeSchedules") as FormControl;
  }

  public get price(): FormControl {
    return this.routeForm.get("price") as FormControl;
  }

  public get transport(): FormGroup {
    return this.routeForm.get("transport") as FormGroup;
  }

  public getPickUpPointFormControl(index: number, controlName: string): FormControl {
    const group = this.pickUpPointForm.controls.at(index) as FormGroup;
    return group.controls[controlName] as FormControl;
  }

  public getFormControlFromGroup(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl;
  }

  public deletePickUpPoint(index: number): void {
    this.pickUpPointForm.removeAt(index);
  }

  public addNewPickUpPoint(): void {
    const newPickUpPoint = this.fb.group({
      name: ["", Validators.required],
      time: ["", Validators.required],
    });

    this.pickUpPointForm.push(newPickUpPoint);
  }

  public submit(): void {
    if (!this.routeForm.valid) {
      this.routeForm.markAllAsTouched();
      return;
    }

    const formattedForm = this.convertDateTime();
    this.form.emit(formattedForm);
    this.routeForm.reset();
  }

  private convertDateTime(): RouteDto {
    const updatedPickUpPoints = this.pickUpPoint.controls.map((pickUpPointGroup: AbstractControl) => ({
      name: pickUpPointGroup.get("name").value,
      time: getTime(pickUpPointGroup.get("time").value),
    }));

    const updatedRouteSchedules = this.routeSchedules.value.map((schedule) => ({
      date: formatDate(schedule),
    }));

    return {
      ...this.routeForm.value,
      departAt: getTime(this.departAt.value),
      arriveAt: getTime(this.arriveAt.value),
      routeSchedules: updatedRouteSchedules,
      pickUpPoint: updatedPickUpPoints,
    };
  }

  public validate(fieldControl: AbstractControl): boolean {
    return validate(fieldControl);
  }
}
