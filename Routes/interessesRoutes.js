import express from "express";
import InteressesController from "../Controllers/InteressesController.js";

const routes = express.Router();

routes.get("/interesses", InteressesController.getAll);

routes.get("/interesses/chamado/:chamado_id", InteressesController.getAllByChamadoID);

routes.get("/interesses/freelancer/:freelancer_id", InteressesController.getAllByFreelancerID);

routes.post("/interesse", InteressesController.cadastrarInteresse);

routes.delete("/interesse/:id", InteressesController.deleteInteresse);

export default routes;
