import express from "express";
import { getRateRes } from "../Controllers/rateResController.js";

const rateResRoutes = express.Router();
//http://localhost:8080/api/rateRes/get-rateRes
rateResRoutes.get("/get-rateRes", getRateRes);

export default rateResRoutes;
