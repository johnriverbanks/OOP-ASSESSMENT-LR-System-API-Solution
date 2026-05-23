import { Employee } from "../User/employee";
import { validateCountry } from "../Validation/validateCountry";
import { bankHolidayProviderRegistry } from "./bankHolidayProviderRegistry";
import { CountryConfirmationCache } from "./CountryConfirmationCache";
import { LeaveRequestService } from "../LeaveSystem/leaveRequestService";
import { DateCalculator } from "../Utility/dateCalculator";

export class bankHolidayRequestProcessor {

    constructor(
        private validator: validateCountry,
        private registry: bankHolidayProviderRegistry,
        private countryConfirmation: CountryConfirmationCache,
        private leaveRequestService: LeaveRequestService,
        private calculator: DateCalculator
    ) {}

    async process(employee: Employee) {

        const employeeId = employee.getEmployeeId();
        const country = employee.country;

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

        const leaveRequests = await this.leaveRequestService.findLeaveWithEmployeeId(employee.getEmployeeId());
        const leaveRequest = leaveRequests[0];
        if (!leaveRequest) {
                throw new Error("No leave request found");
            }
        const provider = this.registry.getOrigin(country);
        const bankHolidays = await provider.getBankHolidays(country);
        const workingDays = await this.calculator.calculateLeaveDays(leaveRequest.startDate, leaveRequest.endDate, bankHolidays);
        this.save(employee, workingDays);

        return "Processed successfully";
    }

    private save(employee: Employee, workingDays: number) {};

}