import {Repository, FindManyOptions} from "typeorm";

import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";

const listCategoriesByIdService = async (id: number) => {
    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category); 
    const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

    const findCategories = await categoriesRepository.findOne({
      where: {
        id: id,
      }
    });

    if (!findCategories) {
      throw new AppError("Category not found", 404);
    }

    const realEstateAndCategory: RealEstate[] = await realEstateRepository.find({
      where: { category: id },
    } as FindManyOptions<RealEstate>);
  
  
    return {...findCategories, realEstate: [...realEstateAndCategory]};
}

export default listCategoriesByIdService