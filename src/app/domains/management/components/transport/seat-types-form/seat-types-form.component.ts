import { Component, EventEmitter, Output } from "@angular/core";
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
  public transportForm: FormGroup;
  public seatTypesForm: FormArray;

  constructor(private config: DynamicDialogConfig) {}

  ngOnInit() {
    this.transportForm = this.config.data["transportForm"];
  }

  public get seatTypes(): FormArray {
    return this.transportForm.get("seatTypes") as FormArray;
  }

  public nextPage(): void {
    if (!this.transportForm.get("seatTypes").valid) {
      this.seatTypesForm.markAllAsTouched();
      return;
    }
    this.nextStep.emit(true);
  }

  public validate(fieldControl: FormControl): boolean {
    return validate(fieldControl);
  }

  public getFormControl(index: number, controlName: string): FormControl {
    const group = (this.transportForm.get("seatTypes") as FormArray).controls.at(index) as FormGroup;
    return group.controls[controlName] as FormControl;
  }
}
