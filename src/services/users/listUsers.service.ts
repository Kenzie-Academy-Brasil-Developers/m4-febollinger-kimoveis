import { Repository } from "typeorm";

import {AppDataSource} from "../../data-source";
import { User } from "../../entities";
import { iAllUsersReturn } from "../../interfaces/users/users.interface";
import { returnAllUsersSchema } from "../../schemas/users/users.schema";

const listUsersService = async (): Promise<iAllUsersReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers = await userRepository.find()

    const returningAll = returnAllUsersSchema.parse(findUsers)

    return returningAll
}

export default listUsersService