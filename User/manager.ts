import { FullName } from "./fullName";
import { UserRole } from "./userRoleEnum";
import { LeaveBalance } from "../LeaveSystem/leaveBalance";
import { Employee } from "./employee";
import { validateCountry } from "../Validation/validateCountry";

export class Manager extends Employee {

    constructor (
        employeeId: number,
        fullName: FullName,
        country: string,
        role: UserRole,
        email: string,
        password: string,
        salt: string,
        approveId: number,
        leaveBalance: LeaveBalance
    ) {
        super(employeeId,
            fullName,
            country,
            UserRole.MANAGER,
            email,
            password,
            salt,
            approveId,
            leaveBalance
);
    }
}