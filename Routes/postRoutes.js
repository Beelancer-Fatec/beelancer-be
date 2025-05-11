import express from "express";
import postsController from "../Controllers/postsController.js";
const PostsRouter = express.Router();

PostsRouter.get("/posts", postsController.getAllPosts);

PostsRouter.get("/post/:id", postsController.getOnePostById);

PostsRouter.get(
  "/posts/freelancer/:freelancer_id",
  postsController.getAllPostsOfFreelancerByFreelancerId
);

PostsRouter.post("/post", postsController.createPost);

PostsRouter.delete("/post/:id", postsController.deletePostById);

export default PostsRouter;
