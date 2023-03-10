import { Request, Response } from "express";

import { tCreateSchedule } from "../../interfaces/schedules/schedules.interface";
import createSchedulesService from "../../services/schedules/createSchedules.service";

const createSchedulesController = async (req: Request, resp: Response): Promise<Response> => {
    const dataBody: tCreateSchedule = req.body
    const userId: number = req.users.id

    await createSchedulesService(dataBody, userId)

    return resp.status(201).json({message: 
        "Schedule created"
    })
}

export default createSchedulesController