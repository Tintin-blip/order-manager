import { request, response } from "express";
import bcryptjs from "bcryptjs";
import { connection } from "../DB/db.js";
import { generateToken } from "../helpers/generateToken.js";

export const createUser = async (req = request, res = response) => {
    try {
        const { email, name, username, password } = req.body;
        const salt = bcryptjs.genSaltSync(10);
        const encryptedPassword = bcryptjs.hashSync(password, salt);

        const sql = "INSERT INTO users(name , username , password , email) VALUES (? , ? , ? , ?)"
        const values = [name , username , encryptedPassword , email]

        const [results] = await connection.query(sql , values);

        return res.status(200).json({
            status:"Success",
            data: results
        });

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

export const login = async (req = request , res = response) => {
    try {
        const { username , password } = req.body
        const sql = "SELECT * FROM users WHERE username = ?";
        const values = [username];

        const [results] = await connection.query(sql , values);

        if (results <= 0) {
            throw new Error("this username does not exist in the DB")
        };

        const comparePassword = bcryptjs.compareSync(password , results[0].password);

        if (!comparePassword) {
            throw new Error("this password is incorrect")
        };

        const token = generateToken(results[0].id);
        
        return res.status(200).json({
            status: "failed",
            token: token
        });

    } catch (error) {
        return res.status(400).json(error.message);
    }
};
