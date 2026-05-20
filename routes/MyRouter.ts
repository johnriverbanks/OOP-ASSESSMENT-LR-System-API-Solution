import { Router } from "express";
import { LeaveController } from "../LeaveSystem/leaveController";
import { LeaveRequestRepo } from "../LeaveSystem/leaveRequestRepo";
import { LeaveRequestService } from "../LeaveSystem/leaveRequestService";

export class MyRouter {

    private controller: LeaveController;

    constructor(private router: Router) {

        const repo = new LeaveRequestRepo();
        const service = new LeaveRequestService(repo)
        this.controller = new LeaveController(service);
        this.addRoutes();
    }

    private addRoutes() {

        this.router.get("/api/leaverequests",
            this.controller.findAllLeaveRequests)
        this.router.get("/api/leaverequests/:employeeid",
            this.controller.findLeaveRequestwithLeaveId)
        this.router.get("/api/leaverequests/:leaverequestid",
            this.controller.findLeaveWithEmployeeId)
        this.router.post("/api/leaverequests",
            this.controller.createLeaveRequest)
        this.router.patch("/api/leaverequests/:leaverequestid",
            this.controller.updateLeaveRequest)
        this.router.delete("/api/leaverequests/:leaverequestid", 
            this.controller.deleteLeaveRequest)
        }

        public getRouter(): Router {
            return this.router
        }

}