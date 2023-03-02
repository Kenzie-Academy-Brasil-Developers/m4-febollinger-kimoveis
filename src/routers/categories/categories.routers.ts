import { Router } from "express";
import { ensureIsOnlyAdmin } from "../../middlewares";

const categoryRouters: Router = Router()

categoryRouters.post("", ensureIsOnlyAdmin)
categoryRouters.get("")

categoryRouters.get("/:id/realEstate")

export {categoryRouters}