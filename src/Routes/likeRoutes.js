import express from "express";
import { getLikeRestaurant } from "../Controllers/likeController.js";


const likeRoutes = express.Router();

userRoutes.get("/get-like", getLikeRestaurant);

export default likeRoutes;