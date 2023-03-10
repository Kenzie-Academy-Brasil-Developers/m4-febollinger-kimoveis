import { Request, Response } from "express";

import listCategoriesByIdService from "../../services/categories/listCategoriesById.service";

const listCategoriesByIdController = async (req: Request, resp: Response): Promise<Response> => {
    const id: number = Number(req.params.id)
    const getListById = await listCategoriesByIdService(id)

    return resp.status(200).json(getListById)
}

export default listCategoriesByIdController