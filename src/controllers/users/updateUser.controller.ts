import { Request, Response } from "express";

import { iUpdateUser } from "../../interfaces/users/users.interface";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, resp: Response):Promise<Response> => {

    const userData: iUpdateUser = req.body
    const userId: number = Number(req.params.id)

    const updating = await updateUserService(userData, userId)

    return resp.status(200).json(updating)

}

export default updateUserController