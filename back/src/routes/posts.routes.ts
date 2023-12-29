import { Router } from "express";
import {
  createPost,
  getPosts,
  getPost,
  deletePost,
} from "../controllers/posts.cotroller";

export const router = Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts", createPost);
router.delete("/posts/:id", deletePost);
