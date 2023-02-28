import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "2014gustavo",
    port: 3306,
    database: "companydb"
});