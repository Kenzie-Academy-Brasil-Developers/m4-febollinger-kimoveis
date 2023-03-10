import { NextFunction, Request, Response } from "express";
import { Repository } from 'typeorm';

import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const ensureUserExist = async (req: Request, resp: Response, next: NextFunction) => {

    const userId: number = Number(req.params.id)
    
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUserId: User | null = await userRepository.findOne({
        where: {
        id: userId
        }
    })

    if(!findUserId){
        throw new AppError("User not found", 404)
    }


    next()
}

export {ensureUserExist}