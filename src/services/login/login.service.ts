import { compareSync } from "bcryptjs";
import {Repository} from "typeorm";
import jwt from 'jsonwebtoken'

import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { iCreateLogin } from "../../interfaces/login/login.interface";

const createLoginService = async (bodyData: iCreateLogin) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser: User | null = await userRepository.findOneBy({
        email: bodyData.email
    })

    if(!findUser){
        throw new AppError('Wrong email or password', 401)
    }
console.log(findUser.password)
console.log(bodyData.password)
    const passwordMatch: boolean = compareSync(bodyData.password, findUser.password)
    console.log(findUser.password)
console.log(bodyData.password)

    if(!passwordMatch){
        throw new AppError('Wrong email or password', 401)
    }

    const token: string = jwt.sign(
        {
            admin: findUser.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: findUser.id.toString()
        }
    )

    return token
}

export default createLoginService