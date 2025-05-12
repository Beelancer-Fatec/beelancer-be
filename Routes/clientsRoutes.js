
import clientsControllers from "../Controllers/clientsControllers.js";
import express from "express";

const clientRoutes = express.Router();

clientRoutes.get("/clients", clientsControllers.getAllClients)

clientRoutes.get("/clients/details", clientsControllers.getAllClientsWithUserDetails)

clientRoutes.get("/client/:id", clientsControllers.getOneClient)

clientRoutes.get("/client/details/:id", clientsControllers.getOneClientWithUserDetails)

clientRoutes.post("/client", clientsControllers.createClient)

clientRoutes.put("/client/:id", clientsControllers.updtClient)

clientRoutes.delete("/client/:id", clientsControllers.deleteClient)

export default clientRoutes