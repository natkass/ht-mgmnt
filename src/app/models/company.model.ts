import { Employee } from './employee.model';

export class Company {
    id: number;
    name: string;
    address: string;
    contactNumber: string;
    email: string;
    employees: Employee[];  // Relationship with Employee

    constructor(id: number, name: string, address: string, contactNumber: string, email: string, employees: Employee[] = []) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.contactNumber = contactNumber;
        this.email = email;
        this.employees = employees;
    }

    getCompanyInfo(): string {
        return `Company Name: ${this.name}, Address: ${this.address}, Contact: ${this.contactNumber}, Email: ${this.email}`;
    }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }
}
