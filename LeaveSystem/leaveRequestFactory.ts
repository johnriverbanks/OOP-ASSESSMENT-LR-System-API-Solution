import { CreateLeaveRequestDTO } from "./createLeaveRequestDTO";
import { LeaveStatus } from "./leaveStatusEnum";
import { LeaveRequestEntity } from "../Entity/leaveRequestEntity";

export class LeaveRequestFactory {

    static create(
        dataTransferObject: CreateLeaveRequestDTO
    ): LeaveRequestEntity {

        const entity = new LeaveRequestEntity();
            entity.employeeId = dataTransferObject.employee_id;
            entity.startDate = new Date(dataTransferObject.start_date);
            entity.endDate = new Date (dataTransferObject.end_date);
            entity.leaveType = dataTransferObject.leave_type;
            entity.status = LeaveStatus.PENDING;
        
            return entity;
    }
}