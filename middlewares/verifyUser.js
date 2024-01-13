import { request , response } from "express";
import { pool } from "../DB/db.js";

export const verifyUser = async (req = request , res = response , next) => {
    const { idUser } = req.params;
    const sql = "SELECT * FROM users WHERE id = ?";
    const values = [idUser];

    const [result] = await pool.query(sql , values);

    if (result.length <= 0) {
        return res.status(400).json({
            status:"failed",
            error: "this user do not exist in the DB"
        });
    };

    next();
};
