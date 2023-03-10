import { Repository } from 'typeorm';

import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { AppError } from '../../errors';
import { iCreateAddress, iCreateRealState } from "../../interfaces/realEstate/realEstate.interface"
import { returnRealState } from '../../schemas/realEstate/realEstate.schema';

const createRealEstateService = async (dataBody: iCreateRealState): Promise<object> => {


    const realStateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)

    const categoryRepository:Repository<Category> = AppDataSource.getRepository(Category)

    if(dataBody.address.state.length > 2){
        throw new AppError("Max state length is 2 characters", 403)
    }

    if(dataBody.address.zipCode.length > 8){
        throw new AppError("Max zipCode length is 8 characters", 403)
    }

    const checkCategory: Category | null = await categoryRepository.findOneBy({
            id: dataBody.categoryId
    })

    if(!checkCategory){
        throw new AppError("Category not found", 404)
    }

    const checkAddress = await addressRepository.findOne({
        where:{
         street: dataBody.address.street,
         number: dataBody.address.number!,
         zipCode: dataBody.address.zipCode,
        },
     })
 
     if(checkAddress){
         throw new AppError("Address already exists",409)
     }


     const creatingAddress: iCreateAddress= addressRepository.create(dataBody.address)

    await addressRepository.save(creatingAddress)

    const creatingRealState = realStateRepository.create({
        ...dataBody,
        address:creatingAddress,
        category:checkCategory
    })

    await realStateRepository.save(creatingRealState)

    return creatingRealState

}

export default createRealEstateService