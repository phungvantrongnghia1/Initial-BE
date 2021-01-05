"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knex = void 0;
console.log('object :>> ', process.env.USER_NAME);
exports.knex = require('knex')({
    client: 'postgresql',
    connection: {
        host: "localhost",
        user: "postgres",
        password: "Password",
        database: "todolist"
    }
});
//# sourceMappingURL=knex.js.map