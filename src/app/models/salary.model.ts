import { Employee } from './employee.model';

export class Salary {
    employee: Employee;  // Relationship with Employee
    baseSalary: number;
    bonuses: number;
    deductions: number;
    netSalary: number;

    constructor(employee: Employee, baseSalary: number, bonuses: number = 0, deductions: number = 0) {
        this.employee = employee;
        this.baseSalary = baseSalary;
        this.bonuses = bonuses;
        this.deductions = deductions;
        this.netSalary = this.calculateNetSalary();
    }

    calculateNetSalary(): number {
        return this.baseSalary + this.bonuses - this.deductions;
    }

    getEmployeeDetails(): string {
        return `Employee ID: ${this.employee.id}, Name: ${this.employee.name}, Net Salary: ${this.netSalary}`;
    }
}
