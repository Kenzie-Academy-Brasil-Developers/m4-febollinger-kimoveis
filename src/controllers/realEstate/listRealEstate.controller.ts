import { Request, Response } from "express"
import listRealEstateService from "../../services/realEstate/listRealEstate.service"

const listRealEstateController = async (req: Request, resp: Response): Promise<Response> => {
    const allRealStates = await listRealEstateService()

    return resp.status(200).json(allRealStates)
}

export default listRealEstateController