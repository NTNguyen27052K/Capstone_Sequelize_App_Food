import express from "express";
import { getFood } from "../Controllers/foodController.js";

const foodRoutes = express.Router();

foodRoutes.get("/get-food", getFood);

export default foodRoutes;
