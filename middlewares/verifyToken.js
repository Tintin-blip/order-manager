import jwt from "jsonwebtoken";
import { request , response } from "express";
import { config } from "dotenv";
config();

export const verifyToken = (req = request , res = response , next) => {
    const token = req.header("x-token");

    if (!token) {
        return res.status(400).json({
            status: "failed",
            error: "you do not have any token"
        });
    };

    try {
        const verify = jwt.verify(token , process.env.JWT_SECRET);

        if (!verify) {
            return res.status(400).json({
                status: "failed",
                error: "this token is invalid"
            });
        };

        next();
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            error: error.message
        });
    };
}; 