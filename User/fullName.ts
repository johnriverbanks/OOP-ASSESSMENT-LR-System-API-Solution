import { ValidationError } from "../Validation/validationError";
import { errorMessage } from "../Validation/errorMessage";

export class FullName {
    constructor (
        private readonly firstName: string,
        private readonly surname: string) {

            this.firstName = this.validateName(firstName, errorMessage.INVALID_FIRST_NAME, 20);
            this.surname = this.validateName(surname, errorMessage.INVALID_SURNAME, 20);

        }

        private validateName(name: string, errorMessage: string, maxLength: number) {
            name = name.trim()

            if (typeof name !== "string" || name.length === 0) {
                throw new ValidationError(errorMessage);
            }

            return name
        }
    
    toString (): string {
        return `${this.firstName} ${this.surname}`;
    }
}