import { Request, Response } from "express";

import { iCreateLogin } from "../../interfaces/login/login.interface";
import createLoginService from "../../services/login/login.service";

const createLoginController = async (req: Request, resp: Response): Promise<Response> => {

    const bodyData: iCreateLogin = req.body

    const logged = await createLoginService(bodyData)

    return resp.json({
        token: logged
    })
}

export default createLoginController