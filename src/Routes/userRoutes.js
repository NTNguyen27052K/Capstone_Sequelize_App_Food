import express from "express";
import { getUser } from "../Controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.get("/get-user", getUser);

export default userRoutes;
