import { Repository } from 'typeorm';

import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from '../../errors';

const listSchedulesService = async (id: number): Promise<any> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstate: RealEstate | null = await realEstateRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        address: true,
        category: true,
        schedules: {
          user:true
        }
      }
    })
  
    if (!realEstate) {
      throw new AppError("RealEstate not found", 404)
    }
  
    return realEstate

}

export default listSchedulesService