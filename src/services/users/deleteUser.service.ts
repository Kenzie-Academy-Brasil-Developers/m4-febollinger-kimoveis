import { Repository } from 'typeorm';

import { AppDataSource } from '../../data-source';
import { User } from '../../entities';


const deleteuserService = async (userId:number): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findingUser: User | null = await userRepository.findOne({
        where:{
            id: userId
        }
    })

    await userRepository.softRemove(findingUser!)

}

export default deleteuserService