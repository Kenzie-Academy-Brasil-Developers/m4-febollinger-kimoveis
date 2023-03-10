import { Request, Response } from "express";

import listUsersService from "../../services/users/listUsers.service";

const listUsersController = async (req: Request, resp: Response) => {
    
    const getUsers = await listUsersService()


    return resp.status(200).json(getUsers)
}

export default listUsersController