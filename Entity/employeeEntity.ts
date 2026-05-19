import { Entity, PrimaryColumn, Column } from "typeorm";
import { UserRole } from "../User/userRoleEnum";
import { type } from "node:os";

@Entity("employees")
export class EmployeeEntity {
    @PrimaryColumn()
    employeeId: number;
    @Column()
    firstName: string;
    @Column()
    lastname: string;
    @Column()
    country: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    salt: string;
    @Column({
        type: "enum",
        enum: UserRole
    })
    role: UserRole;
    @Column()
    approveId: number;
    @Column()
    leaveBalance: number;
}