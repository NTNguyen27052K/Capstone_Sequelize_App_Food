import express from "express";
import { getLike} from "../Controllers/likeController.js";


const likeRoutes = express.Router();

likeRoutes.get("/get-like", getLike);

export default likeRoutes;
