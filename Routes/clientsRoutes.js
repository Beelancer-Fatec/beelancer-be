
import clientsControllers from "../Controllers/clientsControllers.js";
import express from "express";
import Auth from "../Middleware/Auth.js";

const clientRoutes = express.Router();

clientRoutes.get("/clients", clientsControllers.getAllClients)

clientRoutes.get("/clients/details", clientsControllers.getAllClientsWithUserDetails)

clientRoutes.get("/client/:id", Auth.Authorization,clientsControllers.getOneClient)

clientRoutes.get("/client/details/:id",Auth.Authorization, clientsControllers.getOneClientWithUserDetails)

clientRoutes.post("/client",clientsControllers.createClient)

clientRoutes.put("/client/:id", Auth.Authorization,clientsControllers.updtClient)

clientRoutes.put("/client/:id/endereco",Auth.Authorization,clientsControllers.addAddress)

clientRoutes.delete("/client/:id", Auth.Authorization,clientsControllers.deleteClient)

export default clientRoutes