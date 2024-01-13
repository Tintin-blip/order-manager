import express from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { verifyUser } from "../middlewares/verifyUser.js";
import { addOrder , getProducts , getOrder , patchOrder, deleteOrder } from "../controllers/orderController.js";
import { verifyOrder , verifyProduct } from "../helpers/DBvalidations.js";

const orderRouter = express.Router();

orderRouter.get("/products/getProducts/:idUser",[
    verifyToken,
    verifyUser
] , getProducts);

orderRouter.post("/order/addProduct/:idUser",[
    verifyToken,
    verifyUser,
    check("idProduct" , "this product is invalid").notEmpty().custom(verifyProduct),
    check("quantity" , "this quantity is invalid").notEmpty(),
    validateFields
], addOrder);

orderRouter.get("/order/getOrder/:idUser",[
    verifyToken,
    verifyUser,
] , getOrder);

orderRouter.patch("/order/updateOrder/:idUser",[
    verifyToken,
    verifyUser,
    check("idOrder","this order is invalid").notEmpty().custom(verifyOrder),
    check("idProduct","this products is invalid").notEmpty().custom(verifyProduct),
    check("quantity" , "this quantity is invalid").notEmpty(),
    validateFields
] , patchOrder);

orderRouter.delete("/order/deleteOrder/:idUser", [
    verifyToken,
    verifyUser,
    check("idOrder" , "this id is invalid").notEmpty().custom(verifyOrder),
    validateFields
] , deleteOrder);

export { orderRouter };