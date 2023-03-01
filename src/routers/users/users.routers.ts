import { Router } from "express";
import  createUserController  from "../../controllers/users/createUser.controller";
import listUsersController from "../../controllers/users/listUsers.controller";
import { ensureDataIsValid } from "../../middlewares";
import { createUserSchema } from "../../schemas/users/users.schema";


const userRouters: Router = Router()

userRouters.post("", ensureDataIsValid(createUserSchema), createUserController)
userRouters.get("", listUsersController)
userRouters.patch("")
userRouters.delete("")

export {userRouters}