import { ValidationError } from "../Validation/validationError";
import { errorMessages } from "../Validation/errorMessages";

export class FullName {
    constructor (
        private readonly firstName: string,
        private readonly surname: string) {}
    
    toString (): string {
        return `${this.firstName} ${this.surname}`;
    }
}