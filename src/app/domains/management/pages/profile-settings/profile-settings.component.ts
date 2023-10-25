import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Employee, EmployeeDto } from "_api";
import { Observable, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { CreateEmployee, UpdateEmployee } from "src/app/core/service/employee/employee.action";
import { EmployeeService } from "src/app/core/service/employee/employee.service";
import { ToastService } from "src/app/core/service/toast/toast.service";

@Component({
  selector: "app-profile-settings",
  templateUrl: "./profile-settings.component.html",
  styleUrls: ["./profile-settings.component.scss"],
})
export class ProfileSettingsComponent extends BaseDestroyable {
  public currentEmployee: Employee;
  public employees$: Observable<Employee[]>;
  public isUserFormVisible = false;
  public isUpdateMode = false;

  constructor(
    private employeeService: EmployeeService,
    private toastService: ToastService,
    private store: Store
  ) {
    super();
  }

  public cancelUserForm(isCancel): void {
    this.isUserFormVisible = !isCancel;
  }

  public onSelectedEmployeeChange(employee: Employee): void {
    this.currentEmployee = employee;
  }

  public onUpdateModeChange(isUpdateMode: boolean): void {
    this.isUpdateMode = isUpdateMode;
  }

  public onFormVisibleChange(isVisible: boolean): void {
    this.isUserFormVisible = isVisible;
  }

  public handleUserForm(employee: EmployeeDto): void {
    const service$: Observable<Employee> = this.isUpdateMode
      ? this.employeeService.updateEmployee$(this.currentEmployee.id, employee)
      : this.employeeService.createEmployee$(employee);

    service$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.toastService.showSuccess(
          "Success",
          this.isUpdateMode ? "Employee is updated successfully" : "Employee is created successfully"
        );
        this.store.dispatch(this.isUpdateMode ? new UpdateEmployee(response) : new CreateEmployee(response));
      },
    });

    this.isUserFormVisible = false;
  }
}
