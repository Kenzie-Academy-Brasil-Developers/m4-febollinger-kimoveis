import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const ensureDataIsValid = (schema: ZodTypeAny) => (req: Request, resp: Response, next: NextFunction) => {
    const validatedData = schema.parse(req.body)

    req.body = validatedData

    next()
}

export {ensureDataIsValid}