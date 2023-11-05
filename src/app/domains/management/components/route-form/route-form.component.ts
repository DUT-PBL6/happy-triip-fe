import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { City, Route, RouteDto, Transport } from "_api";
import { validate } from "src/app/share/helpers/form.helper";
import { TranslateService } from "@ngx-translate/core";
import { Option } from "src/app/core/interfaces/option.interface";
import { Select, Store } from "@ngxs/store";
import { TransportState } from "src/app/core/service/transport/transport.state";
import { GetAllTransport } from "src/app/core/service/transport/transport.action";
import { Observable } from "rxjs";

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
  public routeForm: FormGroup;
  public pickUpPointForm: FormArray;
  public minDate = new Date();
  public locations: Option<City>[] = [];

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private store: Store
  ) {}

  ngOnInit(): void {
    if (this.store.selectSnapshot(TransportState.getAllTransport).length === 0)
      this.store.dispatch(new GetAllTransport());

    this.initPickUpPointForm();
    this.initRouteForm();
    this.initLocationOptions();
  }

  private initRouteForm(): void {
    this.routeForm = this.fb.group({
      name: ["", Validators.required],
      departAt: ["", Validators.required],
      arriveAt: ["", Validators.required],
      fromAt: ["", Validators.required],
      toAt: ["", Validators.required],
      pickUpPoint: [this.pickUpPointForm],
      routeSchedules: ["", Validators.required],
      price: ["", Validators.required],
      transport: ["", Validators.required],
    });
  }

  private initPickUpPointForm(): void {
    this.pickUpPointForm = this.fb.array(
      [
        this.fb.group({
          name: ["", Validators.required],
          time: ["", Validators.required],
        }),
      ],
      Validators.required
    );
  }

  private initLocationOptions(): void {
    this.locations = Object.values(City).map((value) => ({
      name: this.translate.instant(`share.city.${value}`),
      value,
    }));
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

  public get fromAt(): FormControl {
    return this.routeForm.get("fromAt") as FormControl;
  }

  public get toAt(): FormControl {
    return this.routeForm.get("toAt") as FormControl;
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

  public get transport(): FormControl {
    return this.routeForm.get("transport") as FormControl;
  }

  public getFormControl(index: number, controlName: string): FormControl {
    const group = this.pickUpPointForm.controls.at(index) as FormGroup;
    return group.controls[controlName] as FormControl;
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
    console.log(this.routeForm.value);

    if (!this.routeForm.valid) {
      this.routeForm.markAllAsTouched();
      return;
    }
  }

  public validate(fieldControl: FormControl): boolean {
    return validate(fieldControl);
  }
}
