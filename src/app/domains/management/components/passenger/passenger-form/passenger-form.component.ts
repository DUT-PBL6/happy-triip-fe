import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Passenger, PassengerDto } from "_api";
import { DialogService } from "primeng/dynamicdialog";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { validate } from "src/app/share/helpers/form.helper";
import { PasswordFormComponent } from "../../password/password-form/password-form.component";

@Component({
  selector: "app-passenger-form",
  templateUrl: "./passenger-form.component.html",
  styleUrls: ["./passenger-form.component.scss"],
})
export class PassengerFormComponent implements OnInit {
  @Input() public passenger: Passenger;
  @Output() public form = new EventEmitter<PassengerDto>();
  public isReadOnly = true;
  public isUpdated = true;
  public passengerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.initPassengerForm();
    if (this.isReadOnly) this.passengerForm?.disable();
  }

  private initPassengerForm(): void {
    this.passengerForm = this.fb.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", Validators.required],
    });
    this.passengerForm.patchValue(this.passenger);
  }

  public get name(): FormControl {
    return this.passengerForm.get("name") as FormControl;
  }

  public get username(): FormControl {
    return this.passengerForm.get("username") as FormControl;
  }

  public get password(): FormControl {
    return this.passengerForm.get("password") as FormControl;
  }

  public get phoneNumber(): FormControl {
    return this.passengerForm.get("phoneNumber") as FormControl;
  }

  public get email(): FormControl {
    return this.passengerForm.get("email") as FormControl;
  }

  public submit(): void {
    if (!this.passengerForm.valid) {
      this.passengerForm.markAllAsTouched();
      return;
    }
    this.form.emit(this.passengerForm.value);
    this.isReadOnly = true;
  }
  public handleChangePasswordAction(): void {
    const ref = this.dialogService.open(PasswordFormComponent, {
      header: "Change Password",
      width: "35%",
      data: { user: this.passenger },
    });
  }

  public cancelPassengerForm(): void {
    this.passengerForm.patchValue(this.passenger);
    this.isReadOnly = true;
  }

  public validate(fieldControl: AbstractControl): boolean {
    return validate(fieldControl);
  }

  public handleReadOnly(): void {
    this.isReadOnly = false;
    this.passengerForm?.enable();
  }
}
