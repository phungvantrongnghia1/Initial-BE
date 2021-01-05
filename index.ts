import express from "express";
import dotenv from "dotenv";
import { createExpressServer, useExpressServer } from "routing-controllers";
import { TodoController } from "./src/controllers/TodoController";
import {AppRequest, isAppRequest, middleware} from "./middleware";
import {knex} from "./config/knex";
const app = express();

dotenv.config();
middleware(app, knex);
console.log('object :>> ', process.env.USER_NAME);
// app.use((req,res,next) => {
//     if(!isAppRequest(req)) return;
//     next();
// })
useExpressServer(app, {
    cors: false,
    controllers: [TodoController]
}).listen(3333, () => {
    console.log("Server is running at port 3333");
})