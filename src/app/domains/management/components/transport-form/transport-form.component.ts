import { TranslateService } from "@ngx-translate/core";
import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Transport, TransportDto, TypeVehical, Utility } from "_api";
import { Option } from "src/app/core/interfaces/option.interface";

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
  public vehicleType: Option<TypeVehical>[] = [];
  public Utilities: string[] = Object.keys(Utility);
  public selectedUtilities: string[] = [];

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.initTransportForm();
    this.initVehicleType();
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
      seatTypes: ["", Validators.required],
      images: ["", Validators.required],
      utility: [new FormArray([]), Validators.required],
    });
    if (this.selectedTransport) this.transportForm?.patchValue({ ...this.selectedTransport });
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

  public get seatTypes(): FormControl {
    return this.transportForm.get("seatTypes") as FormControl;
  }

  public get images(): FormControl {
    return this.transportForm.get("images") as FormControl;
  }

  public get utility(): FormArray {
    return this.transportForm.get("utility") as FormArray;
  }

  public toggleUtility(index: number): void {
    const utilityFormArray = this.transportForm.get("utility") as FormArray;
    const utilityControl = utilityFormArray.at(index);

    if (utilityControl.value) {
      utilityFormArray.push(new FormControl(this.Utilities[index]));
    } else {
      utilityFormArray.removeAt(index);
    }
  }

  public submit(): void {
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
