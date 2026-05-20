import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LeaveStatus } from "../LeaveSystem/leaveStatusEnum";
import { LeaveType } from "../LeaveSystem/leaveTypeEnums";

@Entity("leave_request")

export class LeaveRequestEntity {
    @PrimaryGeneratedColumn()
    leaveRequestId: number;
    @Column()
    employeeId: number;
    @Column({
        type: "date"
    })
    startDate: Date;
    @Column({
        type: "date"
    })
    endDate: Date;
    @Column({
        type: "enum",
        enum: LeaveType
    })
    leaveType: LeaveType;
    @Column({
        type: "enum",
        enum: LeaveStatus,
        default: LeaveStatus.PENDING
    })
    status: LeaveStatus;
}