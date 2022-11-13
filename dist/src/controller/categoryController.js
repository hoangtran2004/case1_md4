"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const categoryService_1 = require("../service/categoryService");
class CategoryController {
    constructor() {
        this.getAll = async (req, res) => {
            let categories = await this.categoryService.findAllC(req, res);
            res.render('product/list', {
                category: categories
            });
        };
        this.categoryService = new categoryService_1.CategoryService();
    }
}
exports.CategoryController = CategoryController;
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map