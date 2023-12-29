import { Router } from "express";
import {
  createComment,
  getComments,
  getComment,
  deleteComment,
  deleteComments,
} from "../controllers/comments.controller";

export const router = Router();

router.get("/posts/:postId/comments", getComments);
router.delete("/posts/:postId/comments", deleteComments);
router.get("/posts/:postId/comments/:commentId", getComment);
router.post("/posts/:postId/comments", createComment);
router.delete("/posts/:postId/comments/:commentId", deleteComment);
