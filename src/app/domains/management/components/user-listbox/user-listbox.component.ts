import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Employee } from "_api";
import { Observable } from "rxjs";
import { EmployeeService } from "src/app/core/service/employee/employee.service";

@Component({
  selector: "app-user-listbox",
  templateUrl: "./user-listbox.component.html",
  styleUrls: ["./user-listbox.component.scss"],
})
export class UserListboxComponent implements OnInit {
  public currentEmployee: Employee;
  @Output() selectedEmployee = new EventEmitter<Employee | undefined>();
  @Output() isUpdateMode = new EventEmitter<boolean>();
  @Output() isUserFormVisible = new EventEmitter<boolean>();
  public employees$: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees$ = this.employeeService.getEmployees$();
  }

  public handleAddUser(): void {
    this.isUserFormVisible.emit(true);
    this.isUpdateMode.emit(false);
    this.selectedEmployee.emit(undefined);
    this.currentEmployee = undefined;
  }

  public handleChangeSelectedEmployee(): void {
    this.isUserFormVisible.emit(true);
    this.isUpdateMode.emit(true);
    this.selectedEmployee.emit(this.currentEmployee);
  }
}
