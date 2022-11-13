import { Request, Response } from "express";
export declare class ProductService {
    private productRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
    saveProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<any>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
    searchProduct: (name: string) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
