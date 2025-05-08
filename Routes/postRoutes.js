import express from "express";
import postsController from "../Controllers/postsController";
const router = express.Router();

router.get("/posts", postsController.getAllPosts);

router.get("/post/:id");

router.post("/post", postsController.createPost);

router.delete("/post/:id");
