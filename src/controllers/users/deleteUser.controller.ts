import { Request, Response } from "express";

import deleteuserService from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, resp: Response): Promise<Response> =>{

    const userId: number = Number(req.params.id)

    await deleteuserService(userId)

    return resp.status(204).send()
}

export default deleteUserController