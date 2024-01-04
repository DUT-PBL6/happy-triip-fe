import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Partner, PartnerDto } from "_api";
import { DialogService } from "primeng/dynamicdialog";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { validate } from "src/app/share/helpers/form.helper";
import { PasswordFormComponent } from "../../password/password-form/password-form.component";

@Component({
  selector: "app-partner-form",
  templateUrl: "./partner-form.component.html",
  styleUrls: ["./partner-form.component.scss"],
})
export class PartnerFormComponent implements OnInit {
  @Input() public partner: Partner;
  @Output() public form = new EventEmitter<PartnerDto>();
  public isReadOnly = true;
  public isUpdated = true;
  public partnerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.initPartnerForm();
    if (this.partner.status === "ACCEPTED" || this.partner.status === "DENIED") {
      this.isUpdated = false;
    }
    if (this.isReadOnly) this.partnerForm?.disable();
  }

  private initPartnerForm(): void {
    this.partnerForm = this.fb.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      status: ["", Validators.required],
      medialLink: ["", Validators.required],
      description: ["", Validators.required],
      title: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", Validators.required],
      taxCode: ["", Validators.required],
      address: ["", Validators.required],
    });
    this.partnerForm.patchValue(this.partner);
  }

  public get name(): FormControl {
    return this.partnerForm.get("name") as FormControl;
  }

  public get username(): FormControl {
    return this.partnerForm.get("username") as FormControl;
  }

  public get password(): FormControl {
    return this.partnerForm.get("password") as FormControl;
  }

  public get phoneNumber(): FormControl {
    return this.partnerForm.get("phoneNumber") as FormControl;
  }
  public get email(): FormControl {
    return this.partnerForm.get("email") as FormControl;
  }

  public get status(): FormControl {
    return this.partnerForm.get("status") as FormControl;
  }

  public get description(): FormControl {
    return this.partnerForm.get("description") as FormControl;
  }

  public get title(): FormControl {
    return this.partnerForm.get("title") as FormControl;
  }

  public get medialLink(): FormControl {
    return this.partnerForm.get("medialLink") as FormControl;
  }

  public get taxCode(): FormControl {
    return this.partnerForm.get("taxCode") as FormControl;
  }

  public get address(): FormControl {
    return this.partnerForm.get("address") as FormControl;
  }

  public submit(): void {
    if (!this.partnerForm.valid) {
      this.partnerForm.markAllAsTouched();
      return;
    }
    this.form.emit(this.partnerForm.value);
    this.isReadOnly = true;
  }
  public handleChangePasswordAction(): void {
    console.log(this.partner);
    const ref = this.dialogService.open(PasswordFormComponent, {
      header: "Change Password",
      width: "35%",
      data: { user: this.partner },
    });
  }

  public cancelPartnerForm(): void {
    this.partnerForm.patchValue(this.partner);
    this.isReadOnly = true;
  }

  public validate(fieldControl: AbstractControl): boolean {
    return validate(fieldControl);
  }

  public handleReadOnly(): void {
    this.isReadOnly = false;
  }
}
