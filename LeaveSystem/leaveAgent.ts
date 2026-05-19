import { UserRole } from "../User/userRoleEnum";

export interface LeaveAgent {
    employeeId: number;
    role: UserRole;
}