import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { Employee } from "_api";
import { EmployeeService } from "./employee.service";
import { CreateEmployee, GetAllEmployee, UpdateEmployee } from "./employee.action";
import { Observable, tap } from "rxjs";

interface IEmployeeState {
  employees: Employee[];
}

@State<IEmployeeState>({
  name: "employee",
  defaults: {
    employees: [],
  },
})
@Injectable()
export class EmployeeState {
  @Selector()
  public static getAllEmployee(state: IEmployeeState): Employee[] {
    return state.employees;
  }

  constructor(private employeeService: EmployeeService) {}

  @Action(GetAllEmployee)
  public getAllEmployee$(ctx: StateContext<IEmployeeState>): Observable<Employee[]> {
    ctx.patchState({ employees: [] });
    return this.employeeService.getEmployees$().pipe(
      tap({
        next: (employees) => ctx.patchState({ employees }),
      })
    );
  }

  @Action(CreateEmployee)
  public createEmployee$(ctx: StateContext<IEmployeeState>, action: CreateEmployee): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      employees: [...state.employees, action.employee],
    });
  }

  @Action(UpdateEmployee)
  public updateEmployee$(ctx: StateContext<IEmployeeState>, action: UpdateEmployee): void {
    const state = ctx.getState();
    const updatedEmployees = state.employees.map((employee) => {
      if (employee.id === action.employee.id) return action.employee;
      return employee;
    });
    ctx.setState({
      ...state,
      employees: updatedEmployees,
    });
  }
}
