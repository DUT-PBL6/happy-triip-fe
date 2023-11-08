import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
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
import { UpdateRouteResponse } from "../../../types/update-route-response";

@Component({
  selector: "app-route-form",
  templateUrl: "./route-form.component.html",
  styleUrls: ["./route-form.component.scss"],
})
export class RouteFormComponent implements OnInit, OnChanges {
  @Input() selectedRoute: Route | UpdateRouteResponse;
  @Input() updateMode: boolean;
  @Output() cancelRouteForm = new EventEmitter<boolean>();
  @Output() form = new EventEmitter<RouteDto>();
  @Select(TransportState.getAllTransport) public transports$: Observable<Transport[]>;
  @Select(StationState.getAllStation) public stations$: Observable<Station[]>;
  public routeForm: FormGroup;
  public pickUpPointsForm: FormArray;
  public dropOffPointsForm: FormArray;
  public minDate = new Date();

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedRoute) {
      if (!this.updateMode) {
        this.routeForm?.reset();
        return;
      }
      if (this.selectedRoute) {
        this.routeForm?.patchValue({ ...this.selectedRoute });
      }
    }
  }

  ngOnInit(): void {
    if (this.store.selectSnapshot(TransportState.getAllTransport).length === 0)
      this.store.dispatch(new GetAllTransport());
    if (this.store.selectSnapshot(StationState.getAllStation).length === 0) this.store.dispatch(new GetAllStation());

    this.initPointsForm();
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
      ndays: ["0", Validators.required],
      pickUpPoints: this.pickUpPointsForm,
      dropOffPoints: this.dropOffPointsForm,
      routeSchedules: ["", Validators.required],
      price: ["", Validators.required],
      transport: this.fb.group({
        id: ["", Validators.required],
      }),
    });
  }

  private initPointsForm(): void {
    const pickUpPoints = this.selectedRoute?.pickUpPoints || [];
    const dropOffPoints = this.selectedRoute?.dropOffPoints || [];

    if (this.selectedRoute?.pickUpPoints.length > 0) {
      this.pickUpPointsForm = this.fb.array(
        pickUpPoints.map((point) =>
          this.fb.group({
            address: [point.address, Validators.required],
            time: [point.time, Validators.required],
          })
        ),
        Validators.required
      );
    } else {
      this.pickUpPointsForm = this.fb.array([
        this.fb.group({
          address: ["", Validators.required],
          time: ["", Validators.required],
        }),
      ]);
    }
    if (this.selectedRoute?.dropOffPoints.length > 0) {
      this.dropOffPointsForm = this.fb.array(
        dropOffPoints.map((point) =>
          this.fb.group({
            address: [point.address, Validators.required],
            time: [point.time, Validators.required],
          })
        ),
        Validators.required
      );
    } else {
      this.dropOffPointsForm = this.fb.array([
        this.fb.group({
          address: ["", Validators.required],
          time: ["", Validators.required],
        }),
      ]);
    }
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

  public get ndays(): FormControl {
    return this.routeForm.get("ndays") as FormControl;
  }

  public get pickUpPoints(): FormArray {
    return this.routeForm.get("pickUpPoints") as FormArray;
  }

  public get dropOffPoints(): FormArray {
    return this.routeForm.get("dropOffPoints") as FormArray;
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

  public getFormControlFromArray(formArray: FormArray, index: number, controlName: string): FormControl {
    const group = formArray.controls.at(index) as FormGroup;
    return group.controls[controlName] as FormControl;
  }

  public getFormControlFromGroup(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl;
  }

  public deleteFormControl(formArray: FormArray, index: number): void {
    formArray.removeAt(index);
  }

  public addNewPoint(formArray: FormArray): void {
    const newPoint = this.fb.group({
      address: ["", Validators.required],
      time: ["", Validators.required],
    });

    formArray.push(newPoint);
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
    const updatedPickUpPoints = this.pickUpPoints.controls.map((pickUpPointsGroup: AbstractControl) => ({
      address: pickUpPointsGroup.get("address").value,
      time: getTime(pickUpPointsGroup.get("time").value),
    }));

    const updatedDropOffPoints = this.dropOffPoints.controls.map((dropOffPointsGroup: AbstractControl) => ({
      address: dropOffPointsGroup.get("address").value,
      time: getTime(dropOffPointsGroup.get("time").value),
    }));

    const updatedRouteSchedules = this.routeSchedules.value.map((schedule) => ({
      date: formatDate(schedule),
    }));

    return {
      ...this.routeForm.value,
      departAt: getTime(this.departAt.value),
      arriveAt: getTime(this.arriveAt.value),
      routeSchedules: updatedRouteSchedules,
      pickUpPoints: updatedPickUpPoints,
      dropOffPoints: updatedDropOffPoints,
    };
  }

  public validate(fieldControl: AbstractControl): boolean {
    return validate(fieldControl);
  }
}
