import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  getUserByName,
  updateUser,
} from "../Controllers/userControllers.js";

const userRoutes = express.Router();

//Read
userRoutes.get("/get-user", getUser);
userRoutes.get("/get-user-by-id/:id", getUserById);
userRoutes.get("/get-user-by-name/:name", getUserByName);

//CUD
userRoutes.post("/create-user", createUser);
userRoutes.put("/update-user/:id", updateUser);
userRoutes.delete("/delete-user", deleteUser);

export default userRoutes;
