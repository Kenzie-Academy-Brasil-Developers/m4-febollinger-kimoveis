import { DeepPartial } from "typeorm"
import {z} from "zod"
import { createUserSchema, returnAllUsersSchema, returnUserSchema, updateUser } from "../../schemas/users/users.schema"

type iUserCreate = z.infer<typeof createUserSchema>
type iUserReturn = z.infer<typeof returnUserSchema>
type iAllUsersReturn = z.infer<typeof returnAllUsersSchema>
type iUpdateUser = DeepPartial<typeof updateUser> 


export {
    iUserCreate,
    iUserReturn,
    iAllUsersReturn,
    iUpdateUser
}