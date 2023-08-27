import express from "express";
import foodRoutes from "./foodRoutes.js";
import likeRoutes from "./likeRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/food", foodRoutes);
rootRoutes.use("/like", likeRoutes);

export default rootRoutes;
