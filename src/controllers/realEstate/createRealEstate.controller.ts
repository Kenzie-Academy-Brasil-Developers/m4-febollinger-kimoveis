import { Request, Response } from "express"
import { iCreateRealState } from "../../interfaces/realEstate/realEstate.interface"
import createRealEstateService from "../../services/realEstate/createRealEstate.service"

const createRealEstateController = async (req: Request, resp: Response): Promise<Response> => {
    const dataBody: iCreateRealState = req.body

    const creatingRealEstate = await createRealEstateService(dataBody)

    return resp.status(201).json(creatingRealEstate)
}

export default createRealEstateController