import mysql from "mysql2/promise";
import { config } from "dotenv";

config()


export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
});

export function db() {
    if(pool) {
        console.log("database is online");
    }else{
        console.log("could not connect to database");
    };
};
