import express from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields.js";
import { verifyEmail , verifyUsername } from "../helpers/DBvalidations.js";
import { createUser , login } from "../controllers/loginControllers.js";

const loginRouter = express.Router();

loginRouter.post("/register" , [
    check("email" , "this email is invalid").notEmpty().isEmail().custom(verifyEmail).isLength({min:5 , max:20}),
    check("name" , "this name is invalid").notEmpty().isLength({min:5 , max:20}),
    check("username" , "this username is inavlid").notEmpty().custom(verifyUsername).isLength({min:5 , max:20}),
    check("password" , "this password is invalid").notEmpty().isLength({min:5 , max:20}),
    validateFields
] , createUser);

loginRouter.post("/login" , [
    check("username" , "this username is invalid").notEmpty().isLength({min:5 , max:20}),
    check("password" , "this password is invalid" ).notEmpty().isLength({min:5 , max:20}),
    validateFields
] , login);

export { loginRouter };