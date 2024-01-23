import express from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields.js";
import { verifyEmail, verifyUsername, verifyUsernamePassword } from "../helpers/DBvalidations.js";
import { changePassword, createUser , login, userVerify } from "../controllers/loginControllers.js";

const loginRouter = express.Router();

loginRouter.post("/register" , [
    check("email" , "this email is invalid").notEmpty().isEmail().custom(verifyEmail),
    check("name" , "this name is invalid").notEmpty().isLength({min:5 , max:20}),
    check("username" , "this username is inavlid").notEmpty().custom(verifyUsername).isLength({min:5 , max:20}),
    check("password" , "this password is invalid").notEmpty().isLength({min:5 , max:20}),
    validateFields,
] , createUser);

loginRouter.post("/login" , [
    check("username" , "this username is invalid").notEmpty().isLength({min:5 , max:20}),
    check("password" , "this password is invalid" ).notEmpty().isLength({min:5 , max:20}),
    validateFields
] , login);
loginRouter.post('/passwordmissed', [
    check("username","this username don't exist on Database").notEmpty().custom(verifyUsernamePassword),
    validateFields,
],userVerify)
loginRouter.patch('/editpassword', [
    check("password" , "this password is invalid" ).notEmpty().isLength({min:5 , max:20}),
    check("username",'username invalid').notEmpty(),
    validateFields,
],changePassword)
export { loginRouter };