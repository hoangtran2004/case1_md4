"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../service/product-service");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await this.productService.findAll(req, res);
            res.render('product/list', {
                listProduct: products
            });
        };
        this.showFormCreate = async (req, res) => {
            res.render('product/create');
        };
        this.createP = async (req, res) => {
            await this.productService.saveProduct(req, res);
        };
        this.detailProduct = async (req, res) => {
            let products = await this.productService.findById(req, res);
            res.render('product/detail', {
                product: products
            });
        };
        this.showFormEdit = async (req, res) => {
            res.render('product/update');
        };
        this.editP = async (req, res) => {
            await this.productService.editProduct(req, res);
        };
        this.deleteP = async (req, res) => {
            await this.productService.deleteProduct(req, res);
        };
        this.showFormDelete = async (req, res) => {
            res.render('product/confirm');
        };
        this.showFormUpdating = async (req, res) => {
            res.render('product/updating');
        };
        this.searchP = async (req, res) => {
            let products = await this.productService.searchProduct(req.body.name);
            res.render('product/searchP', {
                product: products
            });
        };
        this.productService = new product_service_1.ProductService();
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map