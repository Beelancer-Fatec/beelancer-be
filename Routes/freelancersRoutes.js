import freelancersController from "../Controllers/freelancersController.js";
import express from "express";

const freelancersRoutes = express.Router()

freelancersRoutes.get("/freelancers",freelancersController.GetAllFreelancers)
freelancersRoutes.get("/freelancers/:id",freelancersController.GetOneFreelancer)

freelancersRoutes.post("/freelancers",freelancersController.CreateFreelancer)

freelancersRoutes.put("/freelancers/:id",freelancersController.UpdateFreelancer)

freelancersRoutes.delete("/freelancers/:id",freelancersController.deleteFreelancer)

export default freelancersRoutes;
