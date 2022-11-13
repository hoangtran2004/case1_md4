"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const data_source_1 = require("../data-source");
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.findAll = async (req, res) => {
            return await this.productRepository.find();
        };
        this.saveProduct = async (req, res) => {
            let files = req.files;
            if (files != null) {
                let products = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                products.image = '/storage/' + image.name;
                await this.productRepository.save(products);
                res.redirect(301, '/create');
            }
        };
        this.editProduct = async (req, res) => {
            let files = req.files;
            if (files != null) {
                let products = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                products.image = '/storage/' + image.name;
                await this.productRepository.update({ id: req.params.id }, products);
                res.redirect(301, '/products');
            }
        };
        this.findById = async (req, res) => {
            return await this.productRepository.findOneById({ id: req.params.id });
        };
        this.deleteProduct = async (req, res) => {
            await this.productRepository.delete({ id: req.params.id });
            res.redirect(301, '/products');
        };
        this.searchProduct = async (name) => {
            return await this.productRepository.query(`select * from product where name like '%${name}%'`);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connect database success!!!');
            this.productRepository = connection.getRepository(product_1.Product);
        });
    }
}
exports.ProductService = ProductService;
exports.default = new ProductService();
//# sourceMappingURL=product-service.js.map