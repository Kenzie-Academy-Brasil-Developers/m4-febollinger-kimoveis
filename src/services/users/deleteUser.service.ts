import { Repository } from 'typeorm';

import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { AppError } from '../../errors';


const deleteuserService = async (userId:number): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findingUser = await userRepository.findOne({
        where:{
            id: userId
        }
    })

    // if(!findingUser){
    //     throw new AppError("User not found", 404)
    // }

    await userRepository.softRemove(findingUser!)

}

export default deleteuserService