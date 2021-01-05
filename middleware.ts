import {Application, Request} from "express";
import {TodoList} from "./src/todo/todointeractor";
import {useExpressServer} from "routing-controllers";
import Knex from "knex";
export interface AppRequest extends Request {
    interactor: {
        todoListInteractor: TodoList
    }
}
export function isAppRequest(request: Request | AppRequest): request is AppRequest {
    return (request as AppRequest) !== undefined;
  }
export const middleware = (app:Application, knex: Knex) => {
    const todoListInteractor = new TodoList(knex);
app.use(function injectInteractor(req, res, next){
    if(!isAppRequest(req))
        return;
    req.interactor = {
        todoListInteractor,
    }
    next();
})
}