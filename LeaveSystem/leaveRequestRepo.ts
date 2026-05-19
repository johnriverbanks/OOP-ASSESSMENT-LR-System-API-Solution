import { Repository } from "typeorm";
import { AppDataSource } from "../DataSource";
import { LeaveRequestEntity } from "../Entity/leaveRequestEntity";

export class LeaveRequestRepo {

    private repo: Repository<LeaveRequestEntity>;

    constructor() {
        this.repo = AppDataSource.getRepository(LeaveRequestEntity);
    }

    async createLeaveRequest(
        data: Partial<LeaveRequestEntity>) {
            const entity = this.repo.create(data);
            return this.repo.save(entity)
        }

    async findLeaveRequestWithLeaveId(
        leaveRequestId: number):
        Promise<LeaveRequestEntity | null> {
            return await this.repo.findOneBy({leaveRequestId:leaveRequestId})
        }

    async findLeaveWithEmployeeId(
        employeeId: number):
        Promise<LeaveRequestEntity[]> {
            return await this.repo.find({
                where: {
                    employeeId:employeeId
                }
            });
        }

    async findAllLeaveRequests():
    Promise<LeaveRequestEntity[]> {
        return await this.repo.find();
    }

    async updateLeaveRequests(
        leaveRequestId: number,
        data: Partial<LeaveRequestEntity>) {
            const result = await this.repo.update(
                leaveRequestId, data);
                return await this.repo.findOneBy({
                    leaveRequestId: leaveRequestId
                })
        }

    async deleteLeaveRequest(
        leaveRequestId: number):
        Promise<boolean> {
            const result = await this.repo.delete(leaveRequestId);
            return result.affected !==0
        }
}