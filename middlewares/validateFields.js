import { validationResult } from "express-validator";
import { request , response } from "express";

export const validateFields = (req = request , res = reponse , next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json(errors)
        return
    }

    next();
};