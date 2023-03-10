import { Repository, DeepPartial } from 'typeorm';

import {AppDataSource} from '../../data-source';
import { User } from '../../entities';
import { iUserReturn } from '../../interfaces/users/users.interface';
import {returnUserSchema} from '../../schemas/users/users.schema';

const createUserService = async (data: DeepPartial<User>): Promise<iUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)


    const userCreate = userRepository.create({
        ...data
    })

    await userRepository.save(userCreate)

    const newUser = returnUserSchema.parse(userCreate)

    return newUser
}

export default createUserService