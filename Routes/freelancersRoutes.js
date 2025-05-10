    import freelancersController from "../Controllers/freelancersController.js";
    import express from "express";

    const freelancersRoutes = express.Router()

    freelancersRoutes.get("/freelancers",freelancersController.GetAllFreelancers)

    freelancersRoutes.get("/freelancers/details",freelancersController.GetAllFreelancersWithUserDetails)

    freelancersRoutes.get("/freelancer/:id",freelancersController.GetOneFreelancer)

    freelancersRoutes.get("/freelancer/details/:id",freelancersController.GetOneFreelancerWithUserDetails)

    freelancersRoutes.post("/freelancers/search",freelancersController.GetFreeByEspec)

    freelancersRoutes.post("/freelancer",freelancersController.CreateFreelancer)

    freelancersRoutes.put("/freelancer/:id",freelancersController.UpdateFreelancer)

    freelancersRoutes.delete("/freelancer/:id",freelancersController.deleteFreelancer)

    export default freelancersRoutes;
