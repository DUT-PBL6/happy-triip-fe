import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Employee } from "_api";
import { Observable } from "rxjs";
import { GetAllEmployee } from "src/app/core/service/employee/employee.action";
import { EmployeeService } from "src/app/core/service/employee/employee.service";
import { EmployeeState } from "src/app/core/service/employee/employee.state";

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
  @Select(EmployeeState.getAllEmployee) public employees$: Observable<Employee[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    if (this.store.selectSnapshot(EmployeeState.getAllEmployee).length === 0) this.store.dispatch(new GetAllEmployee());
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
