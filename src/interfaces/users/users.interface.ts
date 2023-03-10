import { DeepPartial } from "typeorm";
import {z} from "zod";

import { User } from "../../entities";
import { createUserSchema, returnAllUsersSchema, returnUserSchema } from "../../schemas/users/users.schema";

type iUserCreate = z.infer<typeof createUserSchema>
type iUserReturn = z.infer<typeof returnUserSchema>
type iAllUsersReturn = z.infer<typeof returnAllUsersSchema>
type iUpdateUser = DeepPartial<User>


export {
    iUserCreate,
    iUserReturn,
    iAllUsersReturn,
    iUpdateUser
}