import { Router } from "express";

import createCategoryController from "../../controllers/categories/createCategory.controller";
import listCategoriesController from "../../controllers/categories/listCategory.controller";
import listCategoriesByIdController from "../../controllers/categories/listCategoryById.controller";
import { ensureDataIsValid, ensureIsAdmin, ensureTokenIsValid } from "../../middlewares";
import { createCategorySchema } from "../../schemas/categories/categories.schema";

const categoryRouters: Router = Router()

categoryRouters.post("", ensureTokenIsValid,ensureDataIsValid(createCategorySchema), ensureIsAdmin,createCategoryController)

categoryRouters.get("", listCategoriesController)

categoryRouters.get("/:id/realEstate", listCategoriesByIdController)

export {categoryRouters}