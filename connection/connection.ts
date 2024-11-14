import { DataSource } from "typeorm";
import { users } from "../entities/users";

export const connection = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1122",
    database: "training",
    entities: [users],
    synchronize: true,
    logging: false
});