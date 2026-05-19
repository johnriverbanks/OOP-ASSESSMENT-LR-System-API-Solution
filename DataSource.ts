import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserRoleEntity } from "./Entity/UserRoleEntity"
import * as dotenv from "dotenv";
dotenv.config({path: `.env.${process.env.NODE_ENV || "development"}`});

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "localhost"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities: [UserRoleEntity]
})