import { ValidationError } from "../Validation/validationError";
import { ERROR_MESSAGE } from "../Validation/errorMessage";

export class FullName {
    constructor (
        private readonly firstName: string,
        private readonly surname: string) {

            this.firstName = this.validateName(firstName, ERROR_MESSAGE.INVALID_FIRST_NAME, 20);
            this.surname = this.validateName(surname, ERROR_MESSAGE.INVALID_SURNAME, 20);

        }

        private validateName(name: string, errorMessage: string, maxLength: number) {
            name = name.trim()

            if (typeof name !== "string" || name.length === 0) {
                throw new ValidationError(errorMessage);
            }

            if (name.length > maxLength) {
                throw new ValidationError(ERROR_MESSAGE.STRING_TOO_LONG);
            }

            return name
        }
    
    toString (): string {
        return `${this.firstName} ${this.surname}`;
    }
}