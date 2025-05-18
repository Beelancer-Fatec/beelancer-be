    import freelancersController from "../Controllers/freelancersController.js";
    import express from "express";
    import Auth from "../Middleware/Auth.js";

    const freelancersRoutes = express.Router()

    freelancersRoutes.get("/freelancers" ,freelancersController.GetAllFreelancers)

    freelancersRoutes.get("/freelancers/details",freelancersController.GetAllFreelancersWithUserDetails)

    freelancersRoutes.get("/freelancer/:id",Auth.Authorization,freelancersController.GetOneFreelancer)

    freelancersRoutes.get("/freelancer/details/:id",Auth.Authorization,freelancersController.GetOneFreelancerWithUserDetails)

    freelancersRoutes.post("/freelancers/search",Auth.Authorization,freelancersController.GetFreeByEspec)

    freelancersRoutes.post("/freelancer",Auth.Authorization,freelancersController.CreateFreelancer)

    freelancersRoutes.put("/freelancer/:id",Auth.Authorization,freelancersController.UpdateFreelancer)

    freelancersRoutes.delete("/freelancer/:id",Auth.Authorization,freelancersController.deleteFreelancer)

    export default freelancersRoutes;
