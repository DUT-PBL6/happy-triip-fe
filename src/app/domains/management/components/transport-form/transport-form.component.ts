import { TranslateService } from "@ngx-translate/core";
import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Transport, TransportDto, TypeVehical, Utility } from "_api";
import { Option } from "src/app/core/interfaces/option.interface";
import { CheckboxChangeEvent } from "primeng/checkbox";

@Component({
  selector: "app-transport-form",
  templateUrl: "./transport-form.component.html",
  styleUrls: ["./transport-form.component.scss"],
})
export class TransportFormComponent {
  @Input() selectedTransport: Transport;
  @Input() updateMode: boolean;
  @Output() cancelTransportForm = new EventEmitter<boolean>();
  @Output() form = new EventEmitter<TransportDto>();
  public transportForm: FormGroup;
  public seatTypesForm: FormArray;
  public vehicleType: Option<TypeVehical>[] = [];
  public Utilities: string[] = Object.keys(Utility);

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.initVehicleType();
    this.initSeatTypesForm();
    this.initTransportForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedTransport) {
      if (!this.updateMode) {
        this.transportForm?.reset();
        return;
      }
      if (this.selectedTransport) this.transportForm?.patchValue({ ...this.selectedTransport });
    }
  }

  private initTransportForm(): void {
    this.transportForm = this.fb.group({
      name: ["", Validators.required],
      type: ["", Validators.required],
      mapSeat: ["", Validators.required],
      seatTypes: this.seatTypesForm,
      images: [["https://shorturl.at/nptuP"], Validators.required],
      utility: this.fb.array([], Validators.required),
    });
    if (this.selectedTransport) this.transportForm?.patchValue({ ...this.selectedTransport });
  }

  private initSeatTypesForm(): void {
    this.seatTypesForm = this.fb.array(
      [
        this.fb.group({
          name: ["", Validators.required],
          description: [""],
          price: ["", Validators.required],
        }),
      ],
      Validators.required
    );
  }

  private initVehicleType(): void {
    this.vehicleType = Object.entries(TypeVehical).map(([key, value]) => ({
      name: this.translate.instant(`share.vehicleType.${key}`),
      value,
    }));
  }

  public get name(): FormControl {
    return this.transportForm.get("name") as FormControl;
  }

  public get type(): FormControl {
    return this.transportForm.get("type") as FormControl;
  }

  public get mapSeat(): FormControl {
    return this.transportForm.get("mapSeat") as FormControl;
  }

  public get seatTypes(): FormArray {
    return this.transportForm.get("seatTypes") as FormArray;
  }

  public get images(): FormControl {
    return this.transportForm.get("images") as FormControl;
  }

  public get utility(): FormArray {
    return this.transportForm.get("utility") as FormArray;
  }

  public onCheckboxChange(event: CheckboxChangeEvent): void {
    const utility = event.checked[0];

    if (event.checked.length === 0) {
      const index = this.utility.controls.findIndex((x) => x.value === utility);
      this.utility.removeAt(index);
      return;
    }
    this.utility.push(this.fb.control(utility));
  }

  public addNewSeatType(): void {
    const newSeatType = this.fb.group({
      name: ["", Validators.required],
      description: [""],
      price: ["", Validators.required],
    });

    this.seatTypesForm.push(newSeatType);
  }

  public deleteSeatType(index: number): void {
    this.seatTypesForm.removeAt(index);
  }

  public submit(): void {
    console.log(this.transportForm.value);

    if (!this.transportForm.valid) {
      this.transportForm.markAllAsTouched();
      return;
    }

    this.form.emit(this.transportForm.value);
    this.transportForm.reset();
  }

  public validate(fieldControl: FormControl): boolean {
    return fieldControl.hasError("required") && (fieldControl?.dirty || fieldControl?.touched);
  }
}
