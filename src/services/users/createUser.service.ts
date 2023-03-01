import { Repository } from 'typeorm';

import {AppDataSource} from '../../data-source';
import { User } from '../../entities';
import { AppError } from '../../errors';
import { iUserCreate, iUserReturn } from '../../interfaces/users/users.interface';
import {returnUserSchema} from "../../schemas/users/users.schema";

const createUserService = async (payload: iUserCreate): Promise<iUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const userCreate = userRepository.create(payload)

    
    const verifyingEmail: string = payload.email;

    const getEmail = await userRepository.findOne({
        where: {
            email:verifyingEmail
        }
    })

    if(verifyingEmail){
        if(getEmail){
            throw new AppError("Email already exists.", 409)
        }
    }

    await userRepository.save(userCreate)

    return returnUserSchema.parse(userCreate)
}

export default createUserService