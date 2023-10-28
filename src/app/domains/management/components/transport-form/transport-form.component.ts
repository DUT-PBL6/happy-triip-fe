import { TranslateService } from "@ngx-translate/core";
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Transport, TransportDto, TypeVehical, Utility } from "_api";
import { Option } from "src/app/core/interfaces/option.interface";
import { UploadEvent } from "src/app/core/interfaces/upload-event.interface";
import { validate } from "src/app/share/helpers/form.helper";

@Component({
  selector: "app-transport-form",
  templateUrl: "./transport-form.component.html",
  styleUrls: ["./transport-form.component.scss"],
})
export class TransportFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() selectedTransport: Transport;
  @Input() updateMode: boolean;
  @Output() cancelTransportForm = new EventEmitter<boolean>();
  @Output() form = new EventEmitter<TransportDto>();
  public transportForm: FormGroup;
  public seatTypesForm: FormArray;
  public vehicleType: Option<TypeVehical>[] = [];
  public Utilities: string[] = Object.keys(Utility);
  public selectedUtilities: string[] = [];
  public selectedImages: string[] = [];
  public isSubmit = false;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) {}

  ngOnDestroy(): void {
    console.log("Destroying loop");
  }

  ngOnInit(): void {
    this.initVehicleType();
    this.initSeatTypesForm();
    this.initTransportForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedTransport) {
      if (!this.updateMode) {
        this.transportForm?.reset();
        this.selectedUtilities = [];
        return;
      }
      if (this.selectedTransport) this.transportForm?.patchValue({ ...this.selectedTransport });
      this.selectedUtilities = this.selectedTransport?.utility.map((util) => util.toString());
    }
  }

  private initTransportForm(): void {
    this.transportForm = this.fb.group({
      name: ["", Validators.required],
      type: ["", Validators.required],
      mapSeat: [
        [
          [1, 0, 1],
          [0, 1, 0],
        ],
        Validators.required,
      ],
      seatTypes: this.seatTypesForm,
      images: ["", Validators.required],
      utility: ["", Validators.required],
    });
    if (this.selectedTransport) this.transportForm?.patchValue({ ...this.selectedTransport });
  }

  private initSeatTypesForm(): void {
    const seatTypes = this.selectedTransport?.seatTypes || [];

    if (this.selectedTransport?.seatTypes.length > 0) {
      this.seatTypesForm = this.fb.array(
        seatTypes.map((seatType) =>
          this.fb.group({
            name: [seatType.name, Validators.required],
            description: [seatType.description, Validators.required],
            price: [seatType.price, Validators.required],
          })
        ),
        Validators.required
      );
      return;
    }

    this.seatTypesForm = this.fb.array(
      [
        this.fb.group({
          name: ["", Validators.required],
          description: ["", Validators.required],
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

  public getFormControl(index: number, controlName: string): FormControl {
    const group = this.seatTypesForm.controls.at(index) as FormGroup;
    return group.controls[controlName] as FormControl;
  }

  public get images(): FormControl {
    return this.transportForm.get("images") as FormControl;
  }

  public get utility(): FormArray {
    return this.transportForm.get("utility") as FormArray;
  }

  public addNewSeatType(): void {
    const newSeatType = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required],
    });

    this.seatTypesForm.push(newSeatType);
  }

  public deleteSeatType(index: number): void {
    this.seatTypesForm.removeAt(index);
  }

  public handleUploadedPhoto(uploadEvent: UploadEvent): void {
    if (uploadEvent.type === "upload") {
      this.selectedImages.push(uploadEvent.photo as string);
      return;
    }
    const imageIndex = this.selectedImages.findIndex((image) => image === uploadEvent.photo);
    this.selectedImages.splice(imageIndex, 1);
  }

  public submit(): void {
    this.isSubmit = true;
    this.transportForm.patchValue({
      ...this.transportForm.value,
      images: this.selectedImages,
      utility: this.selectedUtilities,
    });

    if (!this.transportForm.valid || !this.seatTypesForm.valid) {
      this.transportForm.markAllAsTouched();
      this.seatTypesForm.markAllAsTouched();
      return;
    }

    this.form.emit(this.transportForm.value);
    this.transportForm.reset();
  }

  public validate(fieldControl: FormControl): boolean {
    return validate(fieldControl);
  }
}
