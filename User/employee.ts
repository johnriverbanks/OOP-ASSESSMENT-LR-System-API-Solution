import { User } from "./user";
import { UserRole } from "./userRoleEnum";
import { FullName } from "./FullName";
import { validateCountry } from "../Validation/validateCountry";
import { LeaveBalance } from "../LeaveSystem/leaveBalance";

export class Employee extends User {

    constructor (
        private readonly employeeId: number,
        fullName: FullName,
        country: string,
        role: UserRole,
        email: string,
        password: string,
        salt: string,
        private readonly approveId: number,
        private readonly leaveBalance: LeaveBalance
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

    public getEmployeeId(): number {
        return this.employeeId;

    }
}