import { Repository } from 'typeorm';

import { AppDataSource } from '../../data-source';
import { RealEstate } from '../../entities';

const listRealEstateService = async (): Promise<any> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findingRealEstate: RealEstate[] = await realEstateRepository.find({
        relations: ["address"]
    })

    return findingRealEstate

}

export default listRealEstateService