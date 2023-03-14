"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'case1_module4',
    username: 'root',
    password: '12345678',
    synchronize: true,
    entities: ['dist/src/model/*.js']
});
//# sourceMappingURL=data-source.js.map