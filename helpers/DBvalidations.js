import { pool } from "../DB/db.js";

export const verifyEmail = async (value , {req}) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    const values = [value];

    const [rows] = await pool.query(sql , values);

    if (rows.length > 0) {
        throw new Error("this email already exist in the DB");
    };
};
export const verifyUsernamePassword = async (value , {req,res}) => {
    const sql = "SELECT * FROM users WHERE username = ?";
    const values = [value];

    const [rows] = await pool.query(sql , values);
    console.log(rows)

    if (rows.length !== 0) {
        console.log('Usuario encontrado en la base de datos');
        return true;
    } else if  (rows.length === 0 ) {
        
        throw new Error('Este usuario no existe en la base de datos')
    }
};

export const verifyUsername = async (value , {req}) => {
    const sql = "SELECT * FROM users WHERE username = ?";
    const values = [value];

    const [rows] = await pool.query(sql , values);

    if (rows.length > 0) {
        throw new Error("this username already exist in the DB");
    };
};


export const verifyProduct = async (value , {req}) => {
    const sql = "SELECT * FROM products WHERE id = ?";
    const values = [value];

    const [result] = await pool.query(sql , values);

    if (result.length <= 0) {
        throw new Error("this product does not exist in the DB")
    };
};

export const verifyOrder = async (value , {req}) => {
    const sql = "SELECT * FROM orders WHERE id = ?";
    const values = [value];
    const [result] = await pool.query(sql , values);

    if (result.length <= 0) {
       throw new Error("this order does not exist in the DB")
    };
};

