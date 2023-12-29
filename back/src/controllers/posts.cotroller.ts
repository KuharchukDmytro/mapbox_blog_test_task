import { NextFunction, Request, Response } from "express";
import * as postsService from "../services/posts.service";

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allPosts = await postsService.getAllPosts();
    res.json(allPosts);
  } catch (e) {
    next(e);
  }
};

export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const singlePost = await postsService.getSinglePost(id);
    res.json(singlePost);
  } catch (e) {
    next(e);
  }
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content } = req.body;
    const newPost = await postsService.createPost(title, content);
    res.json(newPost);
  } catch (e) {
    next(e);
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deletedPost = await postsService.deletePost(id);
    res.json(deletedPost);
  } catch (e) {
    next(e);
  }
};
