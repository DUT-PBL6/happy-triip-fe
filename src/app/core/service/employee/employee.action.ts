import { Employee, EmployeeDto } from "_api";

export class GetAllEmployee {
  static readonly type = "[Employee] Get all employees";
}

export class CreateEmployee {
  static readonly type = "[Employee] Create employee";
  constructor(public employee: Employee) {}
}

export class UpdateEmployee {
  static readonly type = "[Employee] Update employee";
  constructor(public employee: Employee) {}
}
