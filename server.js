import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
import { loginRouter } from "./routes/loginRoutes.js";
import { orderRouter } from "../backend/routes/orderRoutes.js";

config();

export class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.patch = {
            api: "/api"
        };

        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(express.json());
        this.app.use(morgan("dev"));
        this.app.use(cors());
    };

    routes(){
        this.app.use(this.patch.api , loginRouter);
        this.app.use(this.patch.api , orderRouter);
    }

    listen() {
        this.app.listen(this.port , () => {
            console.log("server runnning on port:" , this.port);
        });
    };
};