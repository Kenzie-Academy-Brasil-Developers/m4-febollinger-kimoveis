import "express-async-errors";
import express, { Application } from "express";

import { userRouters } from "./routers/users/users.routers";
import handleError from "./errors";

const app: Application = express();
app.use(express.json())

app.use("/users", userRouters)


app.use(handleError)

export default app

