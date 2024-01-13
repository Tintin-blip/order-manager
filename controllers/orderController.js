import { request , response } from "express";
import { pool } from "../DB/db.js";

export const getProducts = async (req = request , res = response) => {
    try {
        const sql = "SELECT id ,name , price FROM products";
        const products = await pool.query(sql);
        
        return res.status(200).json({
            status: "Success",
            data: products[0]
        });

    } catch (error) {
        return res.status(400).json({status: "failed" , error: error.message});
    };
};

export const addOrder = async (req = request , res = response) => {
    try {
        const { idUser } =  req.params;
        const { quantity , idProduct } = req.body;
        
        //codigo para insertar la orden
        const sql1 = "INSERT INTO orders(id_user) VALUES (?)";
        const values1 = [idUser];
        const query = await pool.query(sql1 , values1);
        
        //codigo para buscar el precio del producto
        const product = await pool.query("SELECT price FROM products WHERE id = ?" ,[idProduct]);
        const priceProduct = product[0][0].price;

        //codigo para insertar los detalles de la orden
        const order = query[0].insertId;
        const sql2 = "INSERT INTO orders_details(id_order , id_product , price , quantity) VALUES     (? , ? , ? , ?)"
        const values2 = [order , idProduct , priceProduct , quantity];
        const insertToOrder = await pool.query(sql2 , values2);

        return res.status(200).json({
            status: "success",
            msg: "order placed succesfully",
            data: insertToOrder[0]
        });
    } catch (error) {
        return res.status(400).json({status: "failed" , error: error.message});
    }
};

export const getOrder = async (req = request , res = response) => {
    try {
        const { idUser } = req.params;
        const sql = "SELECT orders.id , products.name AS product_name , orders_details.price , orders_details.quantity ,provider.name , orders.created_at FROM orders INNER JOIN orders_details ON orders.id=orders_details.id_order INNER JOIN products ON orders_details.id_product=products.id INNER JOIN provider ON products.id_provider=provider.id WHERE orders.id_user = ?";
        const values = [idUser];

        const orders = await pool.query(sql , values);

        if (orders.length <= 0) {
            throw new Error("this user do not have any order")
        };

        return res.status(200).json({
            status: "Success",
            data: orders[0]
        });
    } catch (error) {
        return res.status(400).json({status: "failed" , error: error.message});
    };
};

export const patchOrder = async (req = request , res = response) => {
    try {
        const { idProduct , idOrder , quantity } = req.body;
        const { idUser } = req.params
        
        //busqueda de la orden 
        const sql1 = "SELECT * FROM orders WHERE id = ?";
        const values1 = [idOrder];
        const searchOrder = await pool.query(sql1 , values1);

        //verificamos que la orden sea del usuario
        if (searchOrder[0][0].id_user != idUser) {
            throw new Error("this order does not belong to this user");
        };

        //buscamos el precio actual del producto para insertarlo en la orden 
        const product = await pool.query("SELECT price FROM products WHERE id = ?" ,[idProduct]);
        const priceProduct = product[0][0].price;
        
        //ahora actualizamos la orden 
        const sql2 = "UPDATE orders_details SET id_product = ? , price = ? , quantity = ? WHERE id_Order = ?";
        const values2 = [idProduct , priceProduct , quantity ,idOrder];
        const updateOrder = await pool.query(sql2 , values2);

        return res.status(200).json({
            status: "Success",
            data: updateOrder
        });
    } catch (error) {
        return res.status(400).json({status: "failed" , error: error.message})
    };
};

export const deleteOrder = async (req = request , res = response) => {
    try {
        const { idOrder } = req.body;
        const sql = "DELETE FROM orders WHERE id = ?";
        const values = [idOrder];

        const deleteOrder = await pool.query(sql , values);

        return res.status(200).json({
            status:"Success",
            data:deleteOrder
        });

    } catch (error) {
        return res.status(400).json({status: "failed" , error: error.message});
    };
}