import { LocationStrategy } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthCredentialsDto, TokenResponse } from "_api";
import { takeUntil, tap } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { AuthService } from "src/app/core/service/auth/auth.service";
import { validate } from "src/app/share/helpers/form.helper";
import cacheService from "src/lib/cache-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent extends BaseDestroyable implements OnInit {
  public loginForm: FormGroup;
  public userRole: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private url: LocationStrategy
  ) {
    super();
  }
  ngOnInit(): void {
    this.initLoginForm();
    this.userRole = this.url.path().includes("passenger")
      ? "Passenger"
      : this.url.path().includes("partner")
      ? "Partner"
      : "Employee";
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  public get username(): FormControl {
    return this.loginForm.get("username") as FormControl;
  }

  public get password(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }

  public onLogin(loginForm: FormGroup): void {
    if (!loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const authCredentialsDto: AuthCredentialsDto = {
      username: this.username.value,
      password: this.password.value,
      userRole: this.userRole.toUpperCase(),
    };

    this.authService
      .login$(authCredentialsDto)
      .pipe(
        tap((response: TokenResponse) => {
          cacheService.setValue({
            accessToken: response.accessToken,
          });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: () => {
          this.router.navigate(["/homepage"]);
        },
      });
  }

  public validate(fieldControl: FormControl): boolean {
    return validate(fieldControl);
  }
}
