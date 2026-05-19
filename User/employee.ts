import { User } from "./user";
import { UserRole } from "./userRoleEnum";
import { FullName } from "./fullName";
import { Country } from "../Utility/countryBankHolidays.ts/countryEnum";
import { LeaveBalance } from "../LeaveSystem/leaveBalance";

export class Employee extends User {

    constructor (
        employeeId: number,
        fullName: FullName,
        country: Country,
        role: UserRole,
        email: string,
        password: string,
        salt: string,
        private readonly approveId: number,
        private leaveBalance: LeaveBalance
    ) {
        super(
            fullName,
            country,
            UserRole.EMPLOYEE,
            email,
            password,
            salt,
        );
    }
}