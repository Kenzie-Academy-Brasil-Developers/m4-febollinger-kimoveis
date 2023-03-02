import "express-async-errors";
import express, { Application } from "express";

import { userRouters } from "./routers/users/users.routers";
import handleError from "./errors";
import { loginRouter } from "./routers/login/login.routers";
import { categoryRouters } from "./routers/categories/categories.routers";

const app: Application = express();
app.use(express.json())

app.use("/users", userRouters)
app.use("/login", loginRouter)
app.use("/categories", categoryRouters)


app.use(handleError)

export default app

