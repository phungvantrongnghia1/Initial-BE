"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routing_controllers_1 = require("routing-controllers");
const TodoController_1 = require("./src/controllers/TodoController");
const middleware_1 = require("./middleware");
const knex_1 = require("./config/knex");
const app = express_1.default();
dotenv_1.default.config();
middleware_1.middleware(app, knex_1.knex);
console.log('object :>> ', process.env.USER_NAME);
// app.use((req,res,next) => {
//     if(!isAppRequest(req)) return;
//     next();
// })
routing_controllers_1.useExpressServer(app, {
    cors: false,
    controllers: [TodoController_1.TodoController]
}).listen(3333, () => {
    console.log("Server is running at port 3333");
});
//# sourceMappingURL=index.js.map