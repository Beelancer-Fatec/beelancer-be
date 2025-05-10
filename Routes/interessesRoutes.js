import express from "express";
import InteressesController from "../Controllers/InteressesController.js";

const routes = express.Router();

//routes.get("/interesses", InteressesController.getAllChamados);
routes.post("/interesse", InteressesController.cadastrarInteresse);

export default routes;
