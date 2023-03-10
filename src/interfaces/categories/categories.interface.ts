import {z} from "zod";
import { createCategorySchema, returnCategoriesArray, returnCreatedCategorySchema } from "../../schemas/categories/categories.schema";

type iCreateCategory = z.infer<typeof createCategorySchema>
type iReturnCreatedCategory = z.infer<typeof returnCreatedCategorySchema>
type iReturnAllCategories = z.infer<typeof returnCategoriesArray>

export {
    iCreateCategory,
    iReturnCreatedCategory,
    iReturnAllCategories
}