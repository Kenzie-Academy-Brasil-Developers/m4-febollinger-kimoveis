import { Router } from "express";

import createRealEstateController from "../../controllers/realEstate/createRealEstate.controller";
import listRealEstateController from "../../controllers/realEstate/listRealEstate.controller";
import { ensureDataIsValid, ensureIsAdmin, ensureTokenIsValid } from "../../middlewares";
import { createRealStateSchema } from "../../schemas/realEstate/realEstate.schema";

const realEstateRouters: Router = Router()

realEstateRouters.post("", ensureTokenIsValid,ensureDataIsValid(createRealStateSchema), ensureIsAdmin,createRealEstateController)

realEstateRouters.get("", listRealEstateController)

export {realEstateRouters}