import { connection } from "../DB/db.js";

export const verifyEmail = async (value , {req}) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    const values = [value];

    const [rows] = await connection.query(sql , values);

    if (rows.length > 0) {
        throw new Error("this email already exist in the DB");
    };
};

export const verifyUsername = async (value , {req}) => {
    const sql = "SELECT * FROM users WHERE username = ?";
    const values = [value];

    const [rows] = await connection.query(sql , values);

    if (rows.length > 0) {
        throw new Error("this username already exist in the DB");
    };
};

export const verifyProduct = async (value , {req}) => {
    const sql = "SELECT * FROM products WHERE id = ?";
    const values = [value];

    const [result] = await connection.query(sql , values);

    if (result.length <= 0) {
        throw new Error("this product does not exist in the DB")
    };
};

export const verifyOrder = async (value , {req}) => {
    const sql = "SELECT * FROM orders WHERE id = ?";
    const values = [value];
    const [result] = await connection.query(sql , values);

    if (result.length <= 0) {
       throw new Error("this order does not exist in the DB")
    };
};

