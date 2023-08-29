import express from "express";


import userRoutes from "./userRoutes.js";
import likeRoutes from "./likeRoutes.js";

const rootRoutes = express.Router();


rootRoutes.use("/user", userRoutes);
rootRoutes.use("/like", likeRoutes);


export default rootRoutes;
