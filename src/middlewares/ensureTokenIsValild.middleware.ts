import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config';

import { AppError } from "../errors";

const ensureTokenIsValid = (req: Request, resp: Response, next: NextFunction) => {

    let token: string | undefined = req.headers.authorization

    if(!token){
        throw new AppError("Missing token", 401)
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!,(error, decoded: any) => {
        if(error){
            throw new AppError(error.message, 401)
        }

        req.users ={
            id: Number(decoded.sub),
            admin: decoded.admin
        }

    })

    next()
}

export {ensureTokenIsValid}