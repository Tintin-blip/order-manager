import { request, response } from "express";
import bcryptjs from "bcryptjs";
import { pool } from "../DB/db.js";
import { generateToken } from "../helpers/generateToken.js";



export const createUser = async (req = request, res = response) => {
    try {
        const { email, name, username, password } = req.body;
        const salt = bcryptjs.genSaltSync(10);
        const encryptedPassword = bcryptjs.hashSync(password, salt);

        const sql = "INSERT INTO users(name , username , password , email) VALUES (? , ? , ? , ?)"
        const values = [name , username , encryptedPassword , email]

        const [results] = await pool.query(sql , values);
        console.log(results)
        return res.status(200).json({
            status:"Success",
            data: results.insertId  
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

        const [results] = await pool.query(sql , values);

        if (results <= 0) {
            throw new Error("this username does not exist in the DB")
        };

        const comparePassword = bcryptjs.compareSync(password , results[0].password);

        if (!comparePassword) {
            throw new Error("this password is incorrect")
        };

        const token = generateToken(results[0].id);
        
        return res.status(200).json({
            status: "Succesfull",
            token: token,
            data:results[0].id,
            
        });

    } catch (error) {
        return res.status(400).json(error.message);
    }
};
export const userVerify = async (req, res) => {
    try {
     res.status(200).json({
        status:'User found'
     })

    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: 'Internal Server Error',
      });
    }
  };
  /*
export const changePassword = async(req,res)=> { 
    try { 
        const {username,password} = req.body

        
    }catch(err) { console.log(err)}
}*/

export const changePassword = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Obtener la información del usuario desde la base de datos
      const [user] = await pool.query('SELECT id, password FROM users WHERE username = ?', [username]);
  
      if (!user || !user.length) {
        return res.status(404).json({ status: 'Usuario no encontrado' });
      }
  
      const userId = user[0].id;
      const currentEncryptedPassword = user[0].password;
  
      const newEncryptedPassword = await bcryptjs.hash(password, 10);
  
      await pool.query('UPDATE users SET password = ? WHERE id = ?', [newEncryptedPassword, userId]);
  
      res.status(200).json({ status: 'Contraseña actualizada con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error interno del servidor' });
    }
  };