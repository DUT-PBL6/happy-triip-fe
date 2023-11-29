import { Component, EventEmitter, OnInit, Output, Renderer2 } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { validate } from "src/app/share/helpers/form.helper";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-map-seat-form",
  templateUrl: "./map-seat-form.component.html",
  styleUrls: ["./map-seat-form.component.scss"],
})
export class MapSeatFormComponent implements OnInit {
  @Output() backToPreviousStep = new EventEmitter<boolean>(false);
  public transportForm: FormGroup;
  public mapSeatForm: FormGroup;
  public mapSeatMatrix: number[][] = [];
  public isConfirmRowCol = false;
  public currentSeatColor: string;
  public isUpdateMode = false;

  constructor(
    private fb: FormBuilder,
    private config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    this.transportForm = this.config.data["transportForm"];
    this.isUpdateMode = this.transportForm.get("mapSeat").value.length !== 0;
    this.initMapSeatForm();

    if (this.isUpdateMode) {
      this.confirmRowCol();
    }
  }

  public initMapSeatForm(): void {
    const mapSeatArray = this.transportForm.get("mapSeat").value;
    if (mapSeatArray.length === 0) {
      this.mapSeatForm = this.fb.group({
        col: [{ value: 1, disabled: this.isConfirmRowCol }, Validators.required],
        row: [1, Validators.required],
      });
      return;
    }

    this.mapSeatForm = this.fb.group({
      row: [mapSeatArray[0].length, Validators.required],
      col: [mapSeatArray[0][0].length, Validators.required],
    });
  }

  public get col(): FormControl {
    return this.mapSeatForm.get("col") as FormControl;
  }

  public get row(): FormControl {
    return this.mapSeatForm.get("row") as FormControl;
  }

  public confirmRowCol(): void {
    this.isConfirmRowCol = true;

    if (this.isUpdateMode) {
      this.mapSeatMatrix.push(...this.transportForm.get("mapSeat").value.flat());
      return;
    }

    for (let i = 0; i < this.row.value; i++) {
      const rowArray: number[] = [];
      for (let j = 0; j < this.col.value; j++) {
        rowArray.push(0);
      }
      this.mapSeatMatrix.push(rowArray);
    }
  }

  public clearColRow(): void {
    this.mapSeatMatrix = [];
    this.isConfirmRowCol = false;
    this.currentSeatColor = undefined;
  }

  public setCurrentSeatColor(type: string): void {
    this.currentSeatColor = type;
  }

  public setSeatColor(i: number, j: number): void {
    if (this.currentSeatColor !== undefined) {
      switch (this.currentSeatColor) {
        case "normal-seat":
          this.mapSeatMatrix[i][j] = 0;
          break;
        case "vip-seat":
          this.mapSeatMatrix[i][j] = 1;
          break;
      }
    }
  }

  public previousStep(): void {
    this.backToPreviousStep.emit(true);
  }

  public complete(): void {
    this.transportForm.patchValue({ mapSeat: [this.mapSeatMatrix] });
    this.ref.close();
  }

  public validate(fieldControl: FormControl): boolean {
    return validate(fieldControl);
  }
}
