import { Employee } from "../User/employee";
import { validateCountry } from "../Validation/validateCountry";
import { bankHolidayProviderRegistry } from "./bankHolidayProviderRegistry";
import { CountryConfirmationCache } from "./CountryConfirmationCache";

export class LeaveRequestProcessor {

    constructor(
        private validator: validateCountry,
        private registry: bankHolidayProviderRegistry,
        private countryConfirmation: CountryConfirmationCache
    ) {}

    async process(employee: Employee) {

        const country = employee.country;
        const employeeId = employee.getEmployeeId();

        if (this.countryConfirmation.hasConfirmed(employeeId, country)) {
            return this.processFully(employee, country);
        }

        const result = await this.validator.validate(employeeId, country);

        if (result === "ACCEPT") {
            return this.processFully(employee, country);
        }

        this.countryConfirmation.markSeen(employeeId, country);

        return "Please resend to confirm country";
    }

    private async processFully(employee: Employee, country: string) {

        const origin =
            this.registry.getOrigin(country);

        const holidays =
            await origin.getBankHolidays(country);

        this.save(employee, holidays);

        return "Processed successfully";
    }

    private save(employee: Employee, bankHolidays: Set<string>) {
        console.log("Saved Employee", employee.getEmployeeId());
    }
}