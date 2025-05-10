import usersController from "../Controllers/usersController.js";
import express from "express";

const userRoutes = express.Router();

userRoutes.post("/user", usersController.createUser);

userRoutes.get("/user/:id", usersController.getUserById);

userRoutes.post("/user/login",usersController.LoginUser)

userRoutes.get("/users", usersController.getAllUsers);

userRoutes.put("/user/:id", usersController.updtUser);

userRoutes.delete("/user/:id", usersController.deleUser);

export default userRoutes; 
 