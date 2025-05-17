import chamadosController from "../Controllers/chamadosController.js";
import express from "express";
import Auth from "../Middleware/Auth.js";

const chamadosRoutes = express.Router();

chamadosRoutes.get(
  "/chamados",
  Auth.Authorization,
  chamadosController.getAllChamados
);

chamadosRoutes.get("/chamado/:id",Auth.Authorization, chamadosController.GetOneChamado);

chamadosRoutes.get(
  "/chamados/buscar/ativo",Auth.Authorization,
  chamadosController.getAllChamadosAtivos
);

chamadosRoutes.put("/chamado/:id",Auth.Authorization, chamadosController.updateChamado);

chamadosRoutes.post("/chamado",Auth.Authorization, chamadosController.createChamados);

chamadosRoutes.delete("/chamado/:id",Auth.Authorization, chamadosController.deleteChamados);

export default chamadosRoutes;
