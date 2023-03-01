import { Repository } from 'typeorm';

import {AppDataSource} from '../../data-source';
import { User } from '../../entities';
import { iUpdateUser, iUserReturn } from "../../interfaces/users/users.interface";
import { returnUserSchema } from '../../schemas/users/users.schema';

const updateUserService = async (userData: iUpdateUser, userId: number): Promise<iUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUserId: User | null = await userRepository.findOneBy({
        id: userId
    })


    const userUpdate = userRepository.create({
        ...findUserId,
        ...userData
    })

    await userRepository.save(userUpdate)

    const updating = returnUserSchema.parse(userUpdate)

    return updating

}

export default updateUserService