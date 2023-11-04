import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { City, Station, StationDto } from '_api';
import { UploadEvent } from "src/app/core/interfaces/upload-event.interface";
import { Option } from 'src/app/core/interfaces/option.interface';
import { validate } from 'src/app/share/helpers/form.helper';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-station-form',
  templateUrl: './station-form.component.html',
  styleUrls: ['./station-form.component.scss']
})
export class StationFormComponent implements OnInit, OnDestroy, OnChanges {
  @Input() selectedStation: Station;
  @Input() updateMode: boolean;
  @Output() cancelStationForm = new EventEmitter<boolean>();
  @Output() removeStationForm = new EventEmitter<boolean>();
  @Output() form = new EventEmitter<StationDto>();

  public stationForm: FormGroup;
  public isSubmit = false;
  public cityEnum: Option<City>[] = []

  constructor(
    private fb: FormBuilder, private translate: TranslateService

  ) { }
  ngOnInit(): void {
    this.initStationForm()
    this.initCityEnum()
  }
  ngOnDestroy(): void {
    console.log('Destroying loop');
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedStation) {
      if (!this.updateMode) {
        this.stationForm?.reset();
        return;
      }
      if (this.selectedStation) this.stationForm?.patchValue({ ...this.selectedStation });
    }
  }
  private initStationForm(): void {
    this.stationForm = this.fb.group({
      name: ["", Validators.required],
      ward: ["", Validators.required],
      gmapLink: ["", Validators.required],
      address: ["", Validators.required],
      embedGmapLink: ["", Validators.required],
      description: ["", Validators.required],
      district: ["", Validators.required],
      city: ["", Validators.required],
      images: ["", Validators.required],
    })
    if (this.selectedStation) this.stationForm?.patchValue({ ...this.selectedStation });
  }

  private initCityEnum(): void {
    this.cityEnum = Object.entries(City).map(([key, value]) => ({
      name: this.translate.instant(`${key}`),
      value,
    }))
  }
  public get name(): FormControl {
    return this.stationForm.get("name") as FormControl;
  }
  public get gmapLink(): FormControl {
    return this.stationForm.get("gmapLink") as FormControl;
  }
  public get embedGmapLink(): FormControl {
    return this.stationForm.get("embedGmapLink") as FormControl;
  }
  public get district(): FormControl {
    return this.stationForm.get("district") as FormControl;
  }
  public get city(): FormControl {
    return this.stationForm.get("city") as FormControl;
  }
  public get description(): FormControl {
    return this.stationForm.get("description") as FormControl;
  }
  public get ward(): FormControl {
    return this.stationForm.get("ward") as FormControl;
  }
  public get address(): FormControl {
    return this.stationForm.get("address") as FormControl;
  }

  public get images(): FormControl {
    
    return this.stationForm.get("images") as FormControl;
  }

 
  public handleUploadedPhoto(uploadEvent: UploadEvent): void {
    if (uploadEvent.type === "upload") {
      this.images.setValue([...this.images.value, uploadEvent.photo as string]);
      return;
    }
    const imagesValue = this.images.value.filter((image) => image !== uploadEvent.photo);
    // console.log(this.images);
    // console.log(imagesValue);
    this.images.setValue(imagesValue);
  }

  public submit(): void {
    this.isSubmit = true;
    if (!this.stationForm.valid) {
      this.stationForm.markAllAsTouched();
      return;
    }
    // console.log(this.stationForm.value);
    this.form.emit(this.stationForm.value);
    this.stationForm.reset();
  }

  public validate(fieldControl: FormControl): boolean {
    return validate(fieldControl);
  }
}
