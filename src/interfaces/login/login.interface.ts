import {z} from "zod"
import { createLoginSchema, returnLogin, returnLoginArray } from "../../schemas/login/login.schema"

type iCreateLogin = z.infer<typeof createLoginSchema>
type iReturnLoginWithoutPass = z.infer<typeof returnLogin>
type iReturnLoginArray = z.infer<typeof returnLoginArray> 

interface iToken {
    token: string
}

export {
    iCreateLogin,
    iReturnLoginWithoutPass,
    iReturnLoginArray,
    iToken
}