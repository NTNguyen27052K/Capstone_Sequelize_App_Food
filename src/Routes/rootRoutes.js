import express from "express";

import userRoutes from "./userRoutes.js";
import likeRoutes from "./likeRoutes.js";
import rateResRoutes from "./rateResRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/user", userRoutes);
rootRoutes.use("/like", likeRoutes);
rootRoutes.use("/rateRes", rateResRoutes);

export default rootRoutes;
