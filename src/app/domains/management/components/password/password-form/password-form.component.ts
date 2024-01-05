import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { ChangePassDto, Partner, PartnerDto, Passenger, PassengerDto, UserDto } from "_api";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { Observable, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { PartnerService } from "src/app/core/service/partner/partner.service";
import { PassengerService } from "src/app/core/service/passenger/passenger.service";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { validate } from "src/app/share/helpers/form.helper";
import cacheService from "src/lib/cache-service";
@Component({
  selector: "app-password-form",
  templateUrl: "./password-form.component.html",
  styleUrls: ["./password-form.component.scss"],
})
export class PasswordFormComponent extends BaseDestroyable implements OnInit {
  public passwordForm: FormGroup;
  public isPartner: boolean;
  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private partnerService: PartnerService,
    private passengerService: PassengerService,
    private store: Store,
    private ref: DynamicDialogRef
  ) {
    super();
  }

  ngOnInit() {
    this.initPasswordForm();

    this.isPartner = Object(cacheService.getUserInfo()).userRole === "PARTNER" ? true : false;
  }

  public onChangePassword(passwordForm: FormGroup): void {
    if (!passwordForm.valid) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    if (passwordForm.value.newPassword !== passwordForm.value.cfPassword) {
      this.toastService.showWarning("Error", "Password do not match");
      return;
    }
    const changePassDto: ChangePassDto = {
      password: passwordForm.value.password,
      newPassword: passwordForm.value.newPassword,
    };
    const service$ = this.isPartner
      ? this.partnerService.changePassPartner$(changePassDto)
      : this.passengerService.changePassPassenger$(changePassDto);

    service$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log(response);
        this.toastService.showSuccess("Success", "Password updated successfully!");
        // this.store.dispatch( this.isPartner ?  new UpdatePartner(response) : new UpdatePassenger(response));
        this.ref.close();
      },
    });

    console.log(passwordForm.value);
  }

  private initPasswordForm(): void {
    this.passwordForm = this.fb.group({
      newPassword: ["", Validators.required],
      cfPassword: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  public validate(fieldControl: FormControl): boolean {
    return validate(fieldControl);
  }

  public get password(): FormControl {
    return this.passwordForm.get("password") as FormControl;
  }
  public get newPassword(): FormControl {
    return this.passwordForm.get("newPassword") as FormControl;
  }
  public get cfPassword(): FormControl {
    return this.passwordForm.get("cfPassword") as FormControl;
  }
}
