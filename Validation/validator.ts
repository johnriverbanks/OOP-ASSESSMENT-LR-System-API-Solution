import { ValidationError } from "./validationError";

export abstract class Validator<T> {

    abstract validate(value: T): void;

    protected ensure (condition: boolean, message: string): void {

        if (!condition) {
            throw new ValidationError(message);
        }
    }
}