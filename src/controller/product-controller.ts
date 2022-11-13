import {ProductService} from "../service/product-service";
import {Request, Response} from "express";

export class ProductController {

    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    getAll = async (req: Request, res: Response) => {
        let products = await this.productService.findAll(req, res);
        res.render('product/list', {
            listProduct: products
        })
    };
    showFormCreate = async (req: Request, res: Response) => {

        res.render('product/create')

    };
    createP = async (req: Request, res: Response) => {
        await this.productService.saveProduct(req, res)

    };

    detailProduct = async (req: Request, res: Response) => {
        let products = await this.productService.findById(req, res)
        res.render('product/detail', {
            product: products
        })

    };
    showFormEdit = async (req: Request, res: Response) => {
        res.render('product/update')

    };
    editP = async (req: Request, res: Response) => {
        await this.productService.editProduct(req, res)

    };

    deleteP = async (req: Request, res: Response) => {
        await this.productService.deleteProduct(req, res)
    };
    showFormDelete = async (req: Request, res: Response) => {
        res.render('product/confirm')
    };
    showFormUpdating = async (req: Request, res: Response) => {
        res.render('product/updating')  

    };
    searchP= async (req: Request, res: Response) => {
        let products = await this.productService.searchProduct(req.body.name);
        res.render('product/searchP', {
            product: products
        })

    };
}

export default new ProductController();