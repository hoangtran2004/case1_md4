import {AppDataSource} from "../data-source";
import {Product} from "../model/product";
import {Request, Response} from "express";
import {UploadedFile} from 'express-fileupload';

export class ProductService {
    private productRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connect database success!!!')
            this.productRepository = connection.getRepository(Product);

        })
    }

    findAll = async (req: Request, res: Response) => {
        return await this.productRepository.find()
    }

    saveProduct = async (req: Request, res: Response) => {
        let files = req.files;
        if (files != null) {
            let products = req.body
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            products.image = '/storage/' + image.name;
            await this.productRepository.save(products);
            res.redirect(301, '/create')
        }
    }
    editProduct = async (req: Request, res: Response) => {
        let files = req.files;
        if (files != null) {
            let products = req.body
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            products.image = '/storage/' + image.name;
            await this.productRepository.update({id: req.params.id}, products);
            res.redirect(301, '/products')
        }
    }
    findById = async (req: Request, res: Response) => {
        return await this.productRepository.findOneById({id: req.params.id})

    }
    deleteProduct= async (req: Request, res: Response) => {
         await this.productRepository.delete({id: req.params.id});
        res.redirect(301, '/products');

    };
    searchProduct= async (name: string) => {
       return await this.productRepository.query(`select * from product where name like '%${name}%'`)
    }
}
export default new ProductService();