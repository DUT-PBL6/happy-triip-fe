import { Component, OnInit } from "@angular/core";
import { Employee } from "_api";
import { Observable } from "rxjs";
import { EmployeeService } from "src/app/core/service/employee/employee.service";

@Component({
  selector: "app-profile-settings",
  templateUrl: "./profile-settings.component.html",
  styleUrls: ["./profile-settings.component.scss"],
})
export class ProfileSettingsComponent implements OnInit {
  public currentEmployee: Employee;
  public employees$: Observable<Employee[]>;
  public isUserFormVisible = false;
  public isUpdateMode = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

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
}
