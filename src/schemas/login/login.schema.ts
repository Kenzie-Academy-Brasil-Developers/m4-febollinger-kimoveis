import { hashSync } from "bcryptjs";
import {z} from "zod";

const createLoginSchema = z.object({
    email:z.string().email(),
    password: z.string().min(6).max(12)
})

const returnLogin = createLoginSchema.omit({
    password: true
})

const returnLoginArray = returnLogin.array()

export {
    createLoginSchema,
    returnLogin,
    returnLoginArray
}