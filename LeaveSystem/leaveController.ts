import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { LeaveRequestService } from "./leaveRequestService"

export class LeaveController {

    constructor(
        private LeaveRequestService: LeaveRequestService
    ) {}

        createLeaveRequest = async (
            req: Request,
            res: Response) => {
                const createdLeaveRequest = await 
                this.LeaveRequestService.createLeaveRequest(req.body);
                res.status(StatusCodes.OK).json(createdLeaveRequest);
            }
    
        findLeaveRequestwithLeaveId = async (
            req: Request,
            res: Response) => {
                const leaveRequestId = Number(req.params.leaveRequestId);
                const leaveRequstIdFound = await 
                this.LeaveRequestService.findLeaveRequestWithLeaveId(leaveRequestId)
                res.status(StatusCodes.OK).json(leaveRequstIdFound);
            };
    
        findLeaveWithEmployeeId = async (
            req: Request,
            res: Response) => {
                const employeeId = Number(req.params.employeeId);
                const employeeIdLeaveRequestFound = await
                this.LeaveRequestService.findLeaveWithEmployeeId(employeeId);
                res.status(StatusCodes.OK).json(employeeIdLeaveRequestFound);
            };
        
        findAllLeaveRequests = async (
            req: Request,
            res: Response) => {
                const allLeaveRequestsFound = await
                this.LeaveRequestService.findAllLeaveRequests();
                res.status(StatusCodes.OK).json(allLeaveRequestsFound);
        };
    
        updateLeaveRequest = async (
            req: Request,
            res: Response) => {
                const leaveRequestId = Number(req.params.leaveRequestId);
                const updated = await
                this.LeaveRequestService.updateLeaveRequest(
                    leaveRequestId,
                    req.body);
                    res.status(StatusCodes.OK).json(updated)
            }

        deleteLeaveRequest = async (
            req: Request,
            res: Response) => {
                const leaveRequestId = Number(req.params.leaveRequestId)
                const deleted = await
                this.LeaveRequestService.deleteLeaveRequest(
                    leaveRequestId);
                    res.status(StatusCodes.OK).json({deleted, message:
                    "Leave request deleted"
                })
            }

}