
import clientsControllers from "../Controllers/clientsControllers.js";
import express from "express";

const clientRoutes = express.Router();

clientRoutes.get("/Cliente",clientsControllers.getAllClients)

clientRoutes.post("/Cliente",clientsControllers.createClient)

clientRoutes.put("/Cliente/:id",clientsControllers.updtClient)

clientRoutes.delete("/Cliente/:id",clientsControllers.deleteClient)

export default clientRoutes