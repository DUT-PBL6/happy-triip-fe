import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { City, News, NewsDto, Station, StationDto } from "_api";
import { UploadEvent } from "src/app/core/interfaces/upload-event.interface";
import { Option } from "src/app/core/interfaces/option.interface";
import { validate } from "src/app/share/helpers/form.helper";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-news-form",
  templateUrl: "./news-form.component.html",
  styleUrls: ["./news-form.component.scss"],
})
export class NewsFormComponent implements OnInit, OnChanges {
  @Input() selectedNews: News;
  @Input() updateMode: boolean;
  @Output() cancelNewsForm = new EventEmitter<boolean>();
  @Output() removeNewsForm = new EventEmitter<boolean>();
  @Output() form = new EventEmitter<NewsDto>();
  public newsForm: FormGroup;
  public isSubmit = false;
  text: string | undefined;
  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.initNewsForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedNews) {
      if (!this.updateMode) {
        this.newsForm?.reset();
        return;
      }
      if (this.selectedNews) this.newsForm?.patchValue({ ...this.selectedNews });
    }
  }
  private initNewsForm(): void {
    this.newsForm = this.fb.group({
      title: ["", Validators.required],

      description: ["", Validators.required],

      images: [
        "",
        // , Validators.required
      ],
    });
    if (this.selectedNews) this.newsForm?.patchValue({ ...this.selectedNews });
  }

  public get title(): FormControl {
    return this.newsForm.get("title") as FormControl;
  }

  public get description(): FormControl {
    return this.newsForm.get("description") as FormControl;
  }

  public get images(): FormControl {
    return this.newsForm.get("images") as FormControl;
  }

  public handleUploadedPhoto(uploadEvent: UploadEvent): void {
    if (uploadEvent.type === "upload") {
      this.images.setValue([...this.images.value, uploadEvent.photo as string]);
      return;
    }
    const imagesValue = this.images.value.filter((image) => image !== uploadEvent.photo);
    this.images.setValue(imagesValue);
  }

  public submit(): void {
    this.isSubmit = true;
    if (!this.newsForm.valid) {
      this.newsForm.markAllAsTouched();
      return;
    }
    console.log(this.newsForm);
    this.form.emit(this.newsForm.value);
    this.newsForm.reset();
  }

  public validate(fieldControl: FormControl): boolean {
    return validate(fieldControl);
  }
}
