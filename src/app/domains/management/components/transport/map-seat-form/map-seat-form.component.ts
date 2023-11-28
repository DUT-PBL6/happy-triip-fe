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

  constructor(
    private fb: FormBuilder,
    private config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    this.transportForm = this.config.data["transportForm"];
    this.initMapSeatForm();
  }

  public initMapSeatForm(): void {
    this.mapSeatForm = this.fb.group({
      col: [1, Validators.required],
      row: [1, Validators.required],
    });
  }

  public get col(): FormControl {
    return this.mapSeatForm.get("col") as FormControl;
  }

  public get row(): FormControl {
    return this.mapSeatForm.get("row") as FormControl;
  }

  public confirmRowCol(): void {
    for (let i = 0; i < this.row.value; i++) {
      const rowArray: number[] = [];
      for (let j = 0; j < this.col.value; j++) {
        rowArray.push(0);
      }
      this.mapSeatMatrix.push(rowArray);
    }
    this.isConfirmRowCol = true;
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
