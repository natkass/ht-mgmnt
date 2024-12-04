export class Department {
    id: number;
    name: string;
    description: string;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    static fromJson(json: any): Department {
        return new Department(json.id, json.name, json.description);
    }

    toJson(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description
        };
    }
}
