import {z} from "zod";
import { createScheduleSchema, returnSchedulesSchema } from "../../schemas/schedules/schedules.schema";

type tCreateSchedule = z.infer<typeof createScheduleSchema>
type tReturnSchedule = z.infer<typeof returnSchedulesSchema>

export {
    tCreateSchedule,
    tReturnSchedule
}