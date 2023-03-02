import { NextFunction, Request, Response } from "express";

const ensureIsOnlyAdmin = (req: Request, resp: Response, next: NextFunction) => {

  if (req.users.admin === true) {
    return next();
  }

  return resp.status(401).json({
    message: "You must to be the admin.",
  });
}

export {ensureIsOnlyAdmin}