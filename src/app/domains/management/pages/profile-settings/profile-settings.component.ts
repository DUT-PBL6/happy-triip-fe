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
  public selectedEmployee: Employee;
  public employees$: Observable<Employee[]>;
  public isUserFormVisible = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees$ = this.employeeService.getEmployees$();
    this.employees$.subscribe((employees) => {
      console.log(employees);
    });
  }
}
