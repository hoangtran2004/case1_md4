import {AppDataSource} from "../data-source";
import {Request, Response} from "express";
import {Status} from "../model/status";
export class CategoryService {
    private categoryRepository:any;
    constructor() {
        AppDataSource.initialize().then(connection=>{
            console.log('Connect data success')
            this.categoryRepository=connection.getRepository(Status)
        })
    }
    findAll = async (req: Request, res: Response) => {
        return await this.categoryRepository.find()
    }
}
export default new CategoryService();