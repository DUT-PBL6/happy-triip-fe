import { Component, EventEmitter, Output } from "@angular/core";
import { SeatService } from "../../../services/seat.service";
import { Router } from "@angular/router";
import { SeatTypeDto, Transport } from "_api";
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
  public seatTypes: any;
  public seatTypesForm: FormArray;

  constructor(
    public seatService: SeatService,
    private fb: FormBuilder,
    private config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.selectedTransport = this.config.data["selectedTransport"];
    this.seatTypes = this.config.data["seatTypes"];
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

  public nextPage(): void {
    this.nextStep.emit(true);
  }

  public validate(fieldControl: FormControl): boolean {
    return validate(fieldControl);
  }

  public getFormControl(index: number, controlName: string): FormControl {
    const group = this.seatTypesForm.controls.at(index) as FormGroup;
    return group.controls[controlName] as FormControl;
  }

  public deleteSeatType(index: number): void {
    this.seatTypesForm.removeAt(index);
  }
}
