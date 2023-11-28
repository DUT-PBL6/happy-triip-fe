import { Component, EventEmitter, Output } from "@angular/core";
import { Transport } from "_api";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { validate } from "src/app/share/helpers/form.helper";
import { DynamicDialogConfig } from "primeng/dynamicdialog";

@Component({
  selector: "app-seat-types-form",
  templateUrl: "./seat-types-form.component.html",
  styleUrls: ["./seat-types-form.component.scss"],
})
export class SeatTypesFormComponent {
  @Output() nextStep = new EventEmitter<boolean>(false);
  public selectedTransport: Transport;
  public transportForm: FormGroup;
  public seatTypesForm: FormArray;

  constructor(
    private fb: FormBuilder,
    private config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.selectedTransport = this.config.data["selectedTransport"];
    this.transportForm = this.config.data["transportForm"];

    console.log(this.selectedTransport, this.transportForm);

    this.initSeatTypesForm();
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
          name: ["Normal seat", Validators.required],
          description: ["Normal seat", Validators.required],
          price: [0, Validators.required],
        }),
      ],
      Validators.required
    );
  }

  public get seatTypes(): FormArray {
    return this.transportForm.get("seatTypes") as FormArray;
  }

  public nextPage(): void {
    this.nextStep.emit(true);
  }

  public validate(fieldControl: FormControl): boolean {
    return validate(fieldControl);
  }

  public getFormControl(index: number, controlName: string): FormControl {
    const group = (this.transportForm.get("seatTypes") as FormArray).controls.at(index) as FormGroup;
    return group.controls[controlName] as FormControl;
  }

  public deleteSeatType(index: number): void {
    (this.transportForm.get("seatTypes") as FormArray).removeAt(index);
  }

  public addNewSeatType(): void {
    const newSeatType = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required],
    });

    (this.transportForm.get("seatTypes") as FormArray).push(newSeatType);
  }

  onCellEditComplete(event: Event, product: any): void {
    // Handle cell edit completion here
    console.log("Cell edit complete:", product);
  }
}
