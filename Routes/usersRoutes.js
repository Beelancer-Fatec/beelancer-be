import usersController from "../Controllers/usersController.js";
import express from "express";
import Auth from "../Middleware/Auth.js";

const userRoutes = express.Router();

userRoutes.post("/user", usersController.createUser);

userRoutes.get("/user/:id", usersController.getUserById);

userRoutes.get("/users", usersController.getAllUsers);

userRoutes.put("/user/:id", usersController.updtUser);

userRoutes.delete("/user/:id", usersController.deleUser);

userRoutes.post("/auth",usersController.loginUser)

export default userRoutes;
