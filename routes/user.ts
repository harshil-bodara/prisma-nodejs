import { Router } from "express";
import { getUsersHandler } from "../controller/user.controller";

const userRoutes = Router();


userRoutes.get("/",getUsersHandler);


export default userRoutes;