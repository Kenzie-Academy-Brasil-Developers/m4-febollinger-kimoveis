import { hashSync } from "bcryptjs";
import {z} from "zod";

const createUserSchema =z.object({
    name: z.string().min(3).max(45),
    email: z.string().max(45).email(),
    admin: z.boolean().default(false),
    password: z.string().min(6).max(12).transform((pass) => {
        return hashSync(pass, 10)
    })
}) 

const returnUserSchema = createUserSchema.extend({
    id:z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).omit({
    password: true
})

const returnAllUsersSchema = returnUserSchema.array()
const updateUser = createUserSchema.partial()

export { 
    createUserSchema,
    returnUserSchema,
    returnAllUsersSchema,
    updateUser
}