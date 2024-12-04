import { Department } from './department.model';
import { Salary } from './salary.model';

export class Employee {
    id: number;
    name: string;
    position: string;
    department: Department;  // Relationship with Department
    salary: Salary;  // Relationship with Salary

    constructor(id: number, name: string, position: string, department: Department, salary: Salary) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.department = department;
        this.salary = salary;
    }

    getDetails(): string {
        return `${this.name} works as a ${this.position} in the ${this.department.name} department.`;
    }

    updateSalary(newSalary: number): void {
        this.salary.baseSalary = newSalary;
        this.salary.netSalary = this.salary.calculateNetSalary();
    }
}
