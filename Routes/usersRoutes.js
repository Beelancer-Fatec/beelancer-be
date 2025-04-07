import usersController from "../Controllers/usersController.js";
import express from "express"

const userRoutes = express.Router()

userRoutes.post("/Auth",usersController.createUser)
 
userRoutes.get("/Auth",usersController.getAllUsers)

userRoutes.put("/Auth/:id",usersController.updtUser)

userRoutes.delete("/Auth/:id",usersController.deleUser)

export default userRoutes