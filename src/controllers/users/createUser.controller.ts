import { Request, Response } from "express";
import { DeepPartial } from 'typeorm';

import createUserService from "../../services/users/createUser.service";
import { User } from "../../entities";
import { iUserCreate } from "../../interfaces/users/users.interface";

const createUserController = async (req: Request, resp: Response): Promise<Response> => {

    const data: DeepPartial<User> = req.body 

    const creating = await createUserService(data)

    return resp.status(201).json(creating)
}

export default createUserController