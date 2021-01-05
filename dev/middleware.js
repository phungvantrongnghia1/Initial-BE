"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = exports.isAppRequest = void 0;
const todointeractor_1 = require("./src/todo/todointeractor");
function isAppRequest(request) {
    return request !== undefined;
}
exports.isAppRequest = isAppRequest;
const middleware = (app, knex) => {
    const todoListInteractor = new todointeractor_1.TodoList(knex);
    app.use(function injectInteractor(req, res, next) {
        if (!isAppRequest(req))
            return;
        req.interactor = {
            todoListInteractor,
        };
        next();
    });
};
exports.middleware = middleware;
//# sourceMappingURL=middleware.js.map