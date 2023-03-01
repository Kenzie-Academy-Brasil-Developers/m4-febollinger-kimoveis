import { Request, Response } from "express";
import { iUserCreate } from "../../interfaces/users/users.interface";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (req: Request, resp: Response) => {

    const data: iUserCreate = req.body 

    const creating = await createUserService(data)

    return resp.status(201).json(creating)
}

export default createUserController