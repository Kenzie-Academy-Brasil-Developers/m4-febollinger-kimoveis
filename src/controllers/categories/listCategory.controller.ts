import { Request, Response } from "express"
import listCategoriesService from "../../services/categories/listCategories.service"

const listCategoriesController = async (req: Request, resp: Response): Promise<Response> => {
    const getList = await listCategoriesService()

    return resp.status(200).json(getList)
}

export default listCategoriesController