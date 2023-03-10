import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';

import { Category } from "../../entities";
import { AppError } from '../../errors';
import { iCreateCategory } from "../../interfaces/categories/categories.interface";

const createCategoryService = async (bodyData: iCreateCategory) => {

    const categoryReporitory: Repository<Category> = AppDataSource.getRepository(Category)

    const categoryCreate = categoryReporitory.create(bodyData)

    const checkingCategoryName: string = bodyData.name

    const finding = await categoryReporitory.findOne({
        where: {
            name: checkingCategoryName
        }
    })

    if(checkingCategoryName){
        if(finding){
            throw new AppError("Category already exists", 409)
        }
    }

    return await categoryReporitory.save(categoryCreate)

}

export default createCategoryService