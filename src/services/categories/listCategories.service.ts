import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities';
import { iReturnAllCategories } from '../../interfaces/categories/categories.interface';
import { returnCategoriesArray } from '../../schemas/categories/categories.schema';

const listCategoriesService = async (): Promise<iReturnAllCategories> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const catchCategories = await categoryRepository.find()

    return returnCategoriesArray.parse(catchCategories)

}

export default listCategoriesService