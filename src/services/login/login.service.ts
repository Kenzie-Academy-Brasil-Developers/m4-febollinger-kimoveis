import { compareSync } from "bcryptjs";
import 'dotenv/config'
import {Repository, DeepPartial} from "typeorm";
import jwt from 'jsonwebtoken'

import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { iCreateLogin, iToken } from "../../interfaces/login/login.interface";

const createLoginService = async (bodyData: iCreateLogin): Promise<iToken | string> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const verifyingUser: User | null = await userRepository.findOne({
        where: { email: bodyData.email },
      });

    if (!verifyingUser) {
        throw new AppError("Invalid credentials", 401);
      }

    const passwordMatch: boolean = compareSync(bodyData.password, verifyingUser.password!)


    if(!passwordMatch){
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = jwt.sign(
        {
            admin: verifyingUser.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: verifyingUser.id!.toString()
        }
    )

    return token
}

export default createLoginService