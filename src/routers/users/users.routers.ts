import { Router } from "express";

import  createUserController  from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import listUsersController from "../../controllers/users/listUsers.controller";
import updateUserController from "../../controllers/users/updateUser.controller";
import { ensureDataIsValid, ensureIsAdminOrUserLogged, ensureIsOnlyAdmin, ensureTokenIsValid } from "../../middlewares";
import { createUserSchema, updateUser } from "../../schemas/users/users.schema";


const userRouters: Router = Router()

userRouters.post("", ensureDataIsValid(createUserSchema), createUserController)
userRouters.get("", ensureTokenIsValid ,ensureIsOnlyAdmin,listUsersController)
userRouters.patch("/:id", ensureDataIsValid(updateUser), ensureTokenIsValid, ensureIsAdminOrUserLogged,updateUserController)
userRouters.delete("/:id", ensureTokenIsValid, ensureIsOnlyAdmin,deleteUserController)

export {userRouters}