import {z} from "zod";

const createAddressSchema = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).optional(),
    city: z.string().max(20),
    state: z.string().max(2)
})

const returnAddress = createAddressSchema.extend({
    id: z.number()
})

const createRealStateSchema = z.object({
    value: z.number().or(z.string()),
    size: z.number().int().min(1, `Number must be greater than 0`),
    address: createAddressSchema,
    categoryId: z.number()
})

const returnRealState = createRealStateSchema.extend({
    id:z.number(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    address:returnAddress
}).omit({
    categoryId:true
})

const realEstateArray = returnRealState.array()

export {
    createAddressSchema,
    createRealStateSchema,
    returnRealState,
    realEstateArray,
    returnAddress
}