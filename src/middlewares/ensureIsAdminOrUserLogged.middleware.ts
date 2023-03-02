import { NextFunction, Request, Response } from "express";


const ensureIsAdminOrUserLogged = async (req: Request, resp: Response, next: NextFunction) => {

const idUser = Number(req.params.id);

  if (idUser === req.users.id) {
    return next();
  }

  if (req.users.admin === true) {
    return next();
  }

  return resp.status(401).json({
    message: "You must be the account owner or adm to update this account.",
  });

}

export {
    ensureIsAdminOrUserLogged
}