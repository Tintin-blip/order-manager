import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export const generateToken = (id) => {
    return jwt.sign({id} , process.env.JWT_SECRET , {
        expiresIn: "30d"
    });
};