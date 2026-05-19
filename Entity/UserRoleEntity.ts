import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { UserRole } from "../User/userRoleEnum";

@Entity()

export class UserRoleEntity {

    @PrimaryGeneratedColumn()
        roleId: number;
    @Column({
        type: "enum",
        enum: UserRole
    })
    role: UserRole;
}