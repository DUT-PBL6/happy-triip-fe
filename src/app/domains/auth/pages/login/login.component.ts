import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Select } from "@ngxs/store";
import { TokenResponse } from "_api";
import { Observable, takeUntil, tap } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { AuthService } from "src/app/core/service/auth/auth.service";
import { LoadingState } from "src/app/core/service/loading/loading.state";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent extends BaseDestroyable implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    super();
  }
  ngOnInit(): void {
    this.initLoginForm();
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  public get email(): FormControl {
    return this.loginForm.get("email") as FormControl;
  }

  public get password(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }

  public onLogin(loginForm: FormGroup): void {
    if (!loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.authService.login$(this.email.value, this.password.value);

    // .pipe(
    //   tap((response: TokenResponse) => {
    //     localStorage.setItem("token", response.accessToken);
    //   }),
    //   takeUntil(this.destroy$)
    // )
    // .subscribe({
    //   next: () => {
    //     this.router.navigate(["/homepage"]);
    //   },
    // });
  }

  public validate(fieldControl: FormControl): boolean {
    return fieldControl.hasError("required") && (fieldControl?.dirty || fieldControl?.touched);
  }
}
