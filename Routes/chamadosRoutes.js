import chamadosController from "../Controllers/chamadosController.js";
import express from "express";

const chamadosRoutes = express.Router();

chamadosRoutes.get("/chamados", chamadosController.getAllChamados);

chamadosRoutes.get("/chamado/:id", chamadosController.GetOneChamado);

chamadosRoutes.get("/chamados/buscar/ativo", chamadosController.getAllChamadosAtivos);

chamadosRoutes.put("/chamado/:id", chamadosController.updateChamado);

chamadosRoutes.post("/chamado", chamadosController.createChamados);

chamadosRoutes.delete("/chamado", chamadosController.deleteChamados);

export default chamadosRoutes;
