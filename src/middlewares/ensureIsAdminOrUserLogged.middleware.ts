import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors";


const ensureIsUser = async (req: Request, resp: Response, next: NextFunction) => {

  const authToken: string | undefined= req.headers.authorization

  if (!authToken) {
    throw new AppError("Missing bearer token", 401);
  }

  const token = authToken.split(" ")[1];

  verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    if (error) throw new AppError(error.message, 401);
  });

  next();
}

const ensureIsUserOrAdmin = async (req: Request, resp: Response, next: NextFunction) => {

  const authUser = req.users

  if(authUser.admin !== true && authUser.id !== Number(req.params.id)){
    throw new AppError('Insufficient permission', 403)
  }

  next();
}

export {
  ensureIsUser,
  ensureIsUserOrAdmin
}