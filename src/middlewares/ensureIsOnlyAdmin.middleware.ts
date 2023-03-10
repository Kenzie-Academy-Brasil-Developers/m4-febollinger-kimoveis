import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors";

const ensureIsAdmin = (req: Request, resp: Response, next: NextFunction) => {
   
  const verifyingIsAdmin = req.users.admin

  if(!verifyingIsAdmin){
    throw new AppError('Insufficient permission', 403)
  }

  next();
}

export {ensureIsAdmin}