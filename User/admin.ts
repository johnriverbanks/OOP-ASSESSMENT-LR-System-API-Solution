import { LeaveBalance } from "../LeaveSystem/leaveBalance";
import { validateCountry } from "../Validation/validateCountry";
import { FullName } from "./FullName";
import { Manager } from "./manager";
import { UserRole } from "./userRoleEnum";

export class Admin extends Manager {

    constructor (
        employeeId: number,
        fullName: FullName,
        country: string,
        email: string,
        password: string,
        salt: string,
        approveId: number,
        leaveBalance: LeaveBalance 
    ) {
        super(employeeId,
            fullName,
            country,
            UserRole.ADMIN,
            email,
            password,
            salt,
            approveId,
            leaveBalance
        )
    }

    // 1.	Add a new member of staff
    // 2.	Amend the role or department of a member of staff
    // 3.	View all outstanding leave requests filtered by staff member, manager’s team or across the company
    // 4.	Amend the amount of annual leave assigned to a member of staff
    // 5.	Approve requests on behalf of managers and track system-wide usage.


}