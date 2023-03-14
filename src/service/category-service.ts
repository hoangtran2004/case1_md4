import {AppDataSource} from "../data-source";
import {Request, Response} from "express";
import {Category} from "../model/category";
export class CategoryService {
    private categoryRepository:any;
    constructor() {
        AppDataSource.initialize().then(connection=>{
            console.log('Connect data success')
            this.categoryRepository=connection.getRepository(Category)
        })
    }
    findAll = async (req: Request, res: Response) => {
        return await this.categoryRepository.find()
    }
}
export default new CategoryService();