import express from "express";
import postsController from "../Controllers/postsController.js";
const PostsRouter = express.Router();

PostsRouter.get("/posts", postsController.getAllPosts);

//PostsRouter.get("/post/:id");

PostsRouter.post("/post", postsController.createPost);

//PostsRouter.delete("/post/:id");

export default PostsRouter