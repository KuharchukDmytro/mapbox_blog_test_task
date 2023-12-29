import { NextFunction, Request, Response } from "express";
import * as commentsService from "../services/comments.service";

export const getComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { postId } = req.params;
    const allComments = await commentsService.getAllComments(postId);
    return res.json(allComments);
  } catch (e) {
    next(e);
  }
};

export const getComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { commentId } = req.params;
    const singleComment = await commentsService.getSingleComment(commentId);
    res.json(singleComment);
  } catch (e) {
    next(e);
  }
};

export const createComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { text } = req.body;
    const { postId } = req.params;
    const newComment = await commentsService.createComment(text, postId);
    res.json(newComment);
  } catch (e) {
    next(e);
  }
};

export const deleteComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { postId, commentId } = req.params;
    const result = await commentsService.deleteComment(postId, commentId);
    res.json(result);
  } catch (e) {
    next(e);
  }
};

export const deleteComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { postId } = req.params;
    const result = await commentsService.deleteCommentsForPost(postId);
    res.json(result);
  } catch (e) {
    next(e);
  }
};
