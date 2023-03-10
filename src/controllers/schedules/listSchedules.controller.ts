import { Request, Response } from "express";

import listSchedulesService from "../../services/schedules/listSchedules.service"

const listSchedulesController = async (req: Request, resp: Response): Promise<Response> => {
    const id: number = Number(req.params.id)

    const getList = await listSchedulesService(id)

    return resp.status(200).json(getList)
}

export default listSchedulesController