import {z} from "zod";

const crateCategorySchema = z.object({
    name: z.string()
})

const returnCreatedCategory = crateCategorySchema.extend({
    id: z.number()
})

export { 
    crateCategorySchema,
    returnCreatedCategory
}