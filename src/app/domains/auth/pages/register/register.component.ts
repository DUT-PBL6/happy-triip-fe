import { LocationStrategy } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { AuthService } from "src/app/core/service/auth/auth.service";
import { TokenResponse, UserDto } from "../../../../../../_api";
import { Observable, takeUntil } from "rxjs";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { validate } from "src/app/share/helpers/form.helper";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent extends BaseDestroyable implements OnInit {
  public registerForm: FormGroup;
  public userRole: string;

  constructor(
    private url: LocationStrategy,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private message: ToastService
  ) {
    super();
  }

  ngOnInit(): void {
    this.initRegisterForm();
    this.userRole = this.url.path().includes("partner") ? "Partner" : "Passenger";
  }

  private initRegisterForm(): void {
    this.registerForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", Validators.required],
    });
  }

  public get username(): FormControl {
    return this.registerForm.get("username") as FormControl;
  }

  public get email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }

  public get password(): FormControl {
    return this.registerForm.get("password") as FormControl;
  }

  public get confirmPassword(): FormControl {
    return this.registerForm.get("confirmPassword") as FormControl;
  }

  public get phoneNumber(): FormControl {
    return this.registerForm.get("phoneNumber") as FormControl;
  }

  public get name(): FormControl {
    return this.registerForm.get("name") as FormControl;
  }

  public onRegister(registerForm: FormGroup): void {
    if (!registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    if (this.password.value !== this.confirmPassword.value) {
      this.message.showError("Error", "Password and Confirm Password do not match");
      return;
    }

    const { name, email, username, password, phoneNumber } = this.registerForm.value;
    const user: UserDto = { name, email, username, password, phoneNumber };

    const service$: Observable<TokenResponse> =
      this.userRole === "Passenger"
        ? this.authService.registerPassenger$(user)
        : this.authService.registerPartner$(user);

    service$.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.message.showSuccess("Success", "Register successfully!");
        this.registerForm.reset();
        this.router.navigate(["/auth/login"], {
          queryParams: { userRole: this.userRole.toLowerCase() },
        });
      },
    });
  }

  public validate(fieldControl: FormControl): boolean {
    return validate(fieldControl);
  }
}
