import { Router } from "express";
import createLoginController from "../../controllers/login/login.controller";
import { ensureDataIsValid } from "../../middlewares";
import { createLoginSchema } from "../../schemas/login/login.schema";

const loginRouter: Router = Router()

loginRouter.post("",ensureDataIsValid(createLoginSchema), createLoginController)

export {loginRouter}