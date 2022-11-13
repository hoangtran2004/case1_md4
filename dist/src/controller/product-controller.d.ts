import { Request, Response } from "express";
export declare class ProductController {
    private productService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: Request, res: Response) => Promise<void>;
    createP: (req: Request, res: Response) => Promise<void>;
    detailProduct: (req: Request, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    editP: (req: Request, res: Response) => Promise<void>;
    deleteP: (req: Request, res: Response) => Promise<void>;
    showFormDelete: (req: Request, res: Response) => Promise<void>;
    showFormUpdating: (req: Request, res: Response) => Promise<void>;
    searchP: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
