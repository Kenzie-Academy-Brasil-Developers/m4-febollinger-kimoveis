import { Router } from "express";

import createSchedulesController from "../../controllers/schedules/createSchedules.controller";
import listSchedulesController from "../../controllers/schedules/listSchedules.controller";
import { ensureDataIsValid, ensureIsAdmin, ensureTokenIsValid } from "../../middlewares";
import { createScheduleSchema } from "../../schemas/schedules/schedules.schema";

const schedulesRouters: Router = Router()

schedulesRouters.post("", ensureTokenIsValid,
ensureDataIsValid(createScheduleSchema), createSchedulesController)

schedulesRouters.get("/realEstate/:id",ensureTokenIsValid,ensureIsAdmin,listSchedulesController)

export {schedulesRouters}