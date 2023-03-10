import { Request, Response } from "express";
import { iCreateCategory } from "../../interfaces/categories/categories.interface";
import createCategoryService from "../../services/categories/createCategory.service";

const createCategoryController = async (req: Request, resp: Response): Promise<Response> => {

    const bodyData: iCreateCategory = req.body

    const creating = await createCategoryService(bodyData)

    return resp.status(201).json(creating)
}

export default createCategoryController