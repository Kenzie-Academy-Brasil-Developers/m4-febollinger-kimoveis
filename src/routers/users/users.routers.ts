import { Router } from "express";

import  createUserController  from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import listUsersController from "../../controllers/users/listUsers.controller";
import updateUserController from "../../controllers/users/updateUser.controller";
import { ensureDataIsValid, ensureEmailExist, ensureIsAdmin, ensureIsUserOrAdmin, ensureTokenIsValid, ensureUserExist } from "../../middlewares";
import { createUserSchema, updateUser } from "../../schemas/users/users.schema";


const userRouters: Router = Router()

userRouters.post("", ensureEmailExist, ensureDataIsValid(createUserSchema),createUserController)

userRouters.get("", ensureTokenIsValid ,ensureIsAdmin,listUsersController)

userRouters.patch("/:id", ensureTokenIsValid,ensureUserExist,ensureIsUserOrAdmin,ensureDataIsValid(updateUser),updateUserController)

userRouters.delete("/:id", ensureTokenIsValid, ensureUserExist,ensureIsUserOrAdmin,deleteUserController)

export {userRouters}