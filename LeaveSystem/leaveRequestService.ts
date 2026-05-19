import { LeaveRequestEntity } from "../Entity/leaveRequestEntity";
import { LeaveRequestRepo } from "./leaveRequestRepo";

export class LeaveRequestService {

    constructor(
        private repo: LeaveRequestRepo) {}

    async createLeaveRequest(
        leaveRequest: LeaveRequestEntity
    ): Promise<LeaveRequestEntity> {
        return await this.repo.createLeaveRequest(
            leaveRequest
        );
    }

    async findLeaveRequestWithLeaveId(
        leaveRequestId: number
    ): Promise<LeaveRequestEntity | null> {
        return await this.repo.findLeaveRequestWithLeaveId(
            leaveRequestId
        );
    }

    async findLeaveWithEmployeeId(
        employeeId: number
    ): Promise<LeaveRequestEntity[]> {
        return await this.repo.findLeaveWithEmployeeId(
            employeeId
        );
    }

    async findAllLeaveRequests():
        Promise<LeaveRequestEntity[]> {
            return await this.repo.findAllLeaveRequests();
        }

    async updateLeaveRequest(
        leaveRequestId: number,
        data: Partial<LeaveRequestEntity>):
        Promise<LeaveRequestEntity | null> {
            return await this.repo.updateLeaveRequests(
                leaveRequestId,
                data
            );
        }

    async deleteLeaveRequest(
        leaveRequestId: number):
        Promise<boolean> {
            return await this.repo.deleteLeaveRequest(
                leaveRequestId
            );
    }
}