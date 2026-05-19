import { LeaveType } from "./leaveTypeEnums";

export interface CreateLeaveRequestDTO {
    employee_id: number;
    start_date: Date;
    end_date: Date;
    leave_type: LeaveType;
}