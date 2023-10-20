import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee, EmployeeDto } from "_api";
import { ApiService } from "../base-api/api.service";

@Injectable({ providedIn: "root" })
export class EmployeeService {
  constructor(protected apiService: ApiService) {}

  public getEmployees$(): Observable<Employee[]> {
    return this.apiService.api.authGetAllEmployee();
  }

  public createEmployee$(employeeDto: EmployeeDto): Observable<Employee> {
    return this.apiService.api.authCreateEmployee(employeeDto);
  }

  public updateEmployee$(id: number, employeeDto: EmployeeDto): Observable<Employee> {
    return this.apiService.api.authUpdateEmployee(id, employeeDto);
  }
}
