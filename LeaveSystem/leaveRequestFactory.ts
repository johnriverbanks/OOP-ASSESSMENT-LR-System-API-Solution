import { CreateLeaveRequestDTO } from "./createLeaveRequestDTO";
import { LeaveStatus } from "./leaveStatusEnum";
import { LeaveRequestEntity } from "../Entity/leaveRequestEntity";

export class LeaveRequestFactory {

    static create(
        digitalTransferObject: CreateLeaveRequestDTO
    ): LeaveRequestEntity {

        const entity = new LeaveRequestEntity();
            entity.employeeId = digitalTransferObject.employee_id;
            entity.startDate = new Date(digitalTransferObject.start_date);
            entity.endDate = new Date (digitalTransferObject.end_date);
            entity.leaveType = digitalTransferObject.leave_type;
            entity.status = LeaveStatus.PENDING;
        
            return entity;
    }
}