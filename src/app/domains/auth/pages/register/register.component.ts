import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseDestroyable } from 'src/app/core/directives/base-destroyable/base-destroyable';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { UserDto } from '../../../../../../_api';

import { takeUntil, tap } from 'rxjs';
import { ToastService } from 'src/app/core/service/toast/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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
    this.initRegisterForm()
    this.userRole = this.url.path().includes("passenger")
      ? "Passenger"
      : this.url.path().includes("partner")
        ? "Partner"
        : "Employee";
  }

  private initRegisterForm(): void {
    this.registerForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      name: ["", Validators.required],
      email: ["", [
        Validators.required,
        Validators.email,      
      ]
      ],
      phoneNumber: ["", Validators.required],
    })
  }
  public get username(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }
  public get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  public get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  public get confirmPassword(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  public get phoneNumber(): FormControl {
    return this.registerForm.get('phoneNumber') as FormControl;
  }
  public get name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }

  public onRegister(registerForm: FormGroup): void {
    // console.log(registerForm);
    if (!registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    if (this.password.value !== this.confirmPassword.value) {
      this.message.showError("Error", "Password and Confirm Password do not match")
      return;
    }

    const user: UserDto = {
      name: this.name.value,
      email: this.email.value,
      username: this.username.value,
      password: this.password.value,
      phoneNumber: this.phoneNumber.value,
    }


    let registration;
    if (this.userRole === "Passenger") {
      registration = this.authService.registerPassenger$(user);
    } else if (this.userRole === "Partner") {
      registration = this.authService.registerPartner$(user);
    } else {
      return
    }

    registration
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: () => {
          this.message.showSuccess("Success", "Register susscess");
          this.registerForm.reset();
          this.router.navigate(['/auth/login'], {
            queryParams: { userRole: this.userRole.toLowerCase() }
          });
        },
      });
  }


  public validate(fieldControl: FormControl): boolean {
    return fieldControl.hasError("required") && (fieldControl?.dirty || fieldControl?.touched);
  }
}
