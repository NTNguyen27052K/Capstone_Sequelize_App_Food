import express from "express";
import { getLike } from "../Controllers/likeController.js";

const likeRoutes = express.Router();
//http://localhost:8080/api/like/get-like
likeRoutes.get("/get-like/:resId", getLike);

export default likeRoutes;
