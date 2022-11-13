import { Request, Response } from "express";
export declare class CategoryService {
    private categoryRepository;
    constructor();
    findAllC: (req: Request, res: Response) => Promise<any>;
}
declare const _default: CategoryService;
export default _default;
