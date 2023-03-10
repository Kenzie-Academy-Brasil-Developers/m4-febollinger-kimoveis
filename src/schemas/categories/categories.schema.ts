import {z} from "zod";

const createCategorySchema = z.object({
    name: z.string()
})

const returnCreatedCategorySchema = createCategorySchema.extend({
    id: z.number()
})

const returnCategoriesArray = returnCreatedCategorySchema.array()

export { 
    createCategorySchema,
    returnCreatedCategorySchema,
    returnCategoriesArray
}