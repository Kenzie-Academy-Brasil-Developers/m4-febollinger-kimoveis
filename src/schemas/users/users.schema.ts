import {z} from "zod";

const createUserSchema =z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false).optional(),
    password: z.string().max(120)
}) 

const returnUserSchema = createUserSchema.extend({
    id:z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
})
.omit({
    password: true
})

const returnAllUsersSchema = returnUserSchema.array()
const updateUser = createUserSchema.partial().omit({admin: true})

export { 
    createUserSchema,
    returnUserSchema,
    returnAllUsersSchema,
    updateUser
}