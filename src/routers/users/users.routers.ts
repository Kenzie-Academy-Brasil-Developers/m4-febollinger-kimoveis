import { Router } from "express";
import  createUserController  from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import listUsersController from "../../controllers/users/listUsers.controller";
import updateUserController from "../../controllers/users/updateUser.controller";
import { ensureDataIsValid } from "../../middlewares";
import { createUserSchema, updateUser } from "../../schemas/users/users.schema";


const userRouters: Router = Router()

userRouters.post("", ensureDataIsValid(createUserSchema), createUserController)
userRouters.get("", listUsersController)
userRouters.patch("/:id", ensureDataIsValid(updateUser), updateUserController)
userRouters.delete("/:id", deleteUserController)

export {userRouters}