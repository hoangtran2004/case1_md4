"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const data_source_1 = require("../data-source");
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.findAll = async (req, res) => {
            return await this.categoryRepository.find();
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connect data success');
            this.categoryRepository = connection.getRepository(category_1.Category);
        });
    }
}
exports.CategoryService = CategoryService;
exports.default = new CategoryService();
//# sourceMappingURL=category-service.js.map