import express from "express";
import InteressesController from "../Controllers/InteressesController.js";
import Auth from "../Middleware/Auth.js";
const routes = express.Router();

routes.get("/interesses", Auth.Authorization, InteressesController.getAll);

routes.get("/interesses/chamado/:chamado_id",Auth.Authorization, InteressesController.getAllByChamadoID);

routes.get("/interesses/freelancer/:freelancer_id",Auth.Authorization, InteressesController.getAllByFreelancerID);

routes.post("/interesse",Auth.Authorization, InteressesController.cadastrarInteresse);

routes.delete("/interesse/:id",Auth.Authorization, InteressesController.deleteInteresse);

export default routes;
