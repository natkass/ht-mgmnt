export class Candidate {
    id: number;
    name: string;
    email: string;
    phone: string;
    resume: string;
    status: string;

    constructor(id: number, name: string, email: string, phone: string, resume: string, status: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.resume = resume;
        this.status = status;
    }

    updateStatus(newStatus: string): void {
        this.status = newStatus;
    }

    getCandidateInfo(): string {
        return `Candidate ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Status: ${this.status}`;
    }

    static fromJson(json: any): Candidate {
        return new Candidate(
            json.id, 
            json.name, 
            json.email, 
            json.phone, 
            json.resume, 
            json.status
        );
    }
}
