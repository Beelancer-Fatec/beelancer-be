import express from "express";
import postsController from "../Controllers/postsController.js";
import Auth from "../Middleware/Auth.js";
const PostsRouter = express.Router();

PostsRouter.get("/posts", postsController.getAllPosts);

PostsRouter.get("/post/:id", postsController.getOnePostById);

PostsRouter.get(
  "/posts/freelancer/:freelancer_id",
  postsController.getAllPostsOfFreelancerByFreelancerId
);

PostsRouter.post("/post", Auth.Authorization, postsController.createPost);

PostsRouter.delete(
  "/post/:id",
  Auth.Authorization,
  postsController.deletePostById
);

export default PostsRouter;
