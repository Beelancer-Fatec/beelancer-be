import express from "express";
import mongoose from "./config/db-connection.js";
import cors from "cors";
//SERVICES
import freelancersServices from "./Services/freelancersServices.js";
import usersServices from "./Services/usersServices.js";
//ROUTES
import clientRoutes from "./Routes/clientsRoutes.js";
import userRoutes from "./Routes/usersRoutes.js";
import chamadosRoutes from "./Routes/chamadosRoutes.js";
import freelancersRoutes from "./Routes/freelancersRoutes.js";
import PostsRoutes from "./Routes/postRoutes.js";
import InteressesRoutes from "./Routes/interessesRoutes.js";
//
const app = express();

//CONFIGURACAO EXPRESS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
app.use("/", clientRoutes);
app.use("/", chamadosRoutes);
app.use("/", freelancersRoutes);
app.use("/", PostsRoutes);
app.use("/", InteressesRoutes);
app.get("/", async (req, res) => {
  res.send("API BEELANCERS - BACKEND");
});

//ABRINDO SERVIDOR
const port = 4001;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`SERVIDOR INICIADO localhost:${port}`);
  }
});
