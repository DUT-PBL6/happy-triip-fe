import { TranslateService } from "@ngx-translate/core";
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Employee, EmployeeDto, EmployeeRoles, UserDto } from "_api";
import { UserRole } from "src/app/core/enums/user-role.enum";
import { Option } from "src/app/core/interfaces/option.interface";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() selectedEmployee: Employee;
  @Input() updateMode: boolean;
  @Output() cancelUserForm = new EventEmitter<boolean>();
  @Output() form = new EventEmitter<EmployeeDto>();
  public userForm: FormGroup;
  public employeeRoles: Option<EmployeeRoles>[] = [];

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.initUserForm();
    this.initUserRoles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedEmployee) {
      if (!this.updateMode) {
        this.userForm?.reset();
        return;
      }
      if (this.selectedEmployee) this.userForm?.patchValue({ ...this.selectedEmployee });
    }
  }

  private initUserForm(): void {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      username: ["", Validators.required],
      password: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      role: ["", Validators.required],
    });
    if (this.selectedEmployee) this.userForm?.patchValue({ ...this.selectedEmployee });
  }

  private initUserRoles(): void {
    this.employeeRoles = Object.entries(EmployeeRoles).map(([key, value]) => ({
      name: this.translate.instant(`share.employeeRole.${key}`),
      value,
    }));
  }

  public get name(): FormControl {
    return this.userForm.get("name") as FormControl;
  }
  public get email(): FormControl {
    return this.userForm.get("email") as FormControl;
  }
  public get username(): FormControl {
    return this.userForm.get("username") as FormControl;
  }
  public get password(): FormControl {
    return this.userForm.get("password") as FormControl;
  }

  public get phoneNumber(): FormControl {
    return this.userForm.get("phoneNumber") as FormControl;
  }

  public get role(): FormControl {
    return this.userForm.get("role") as FormControl;
  }

  public submit(): void {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }
    this.form.emit(this.userForm.value);
    this.userForm.reset();
  }

  public validate(fieldControl: FormControl): boolean {
    return fieldControl.hasError("required") && (fieldControl?.dirty || fieldControl?.touched);
  }
}
