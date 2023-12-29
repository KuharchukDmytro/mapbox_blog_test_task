import { client } from "../config/initializeDB";

export const getAllPosts = async () => {
  const allPosts = await client.query("SELECT * FROM posts");
  return allPosts.rows;
};

export const getSinglePost = async (postId: string) => {
  const singlePost = await client.query("SELECT * FROM posts where id = $1", [
    postId,
  ]);
  return singlePost.rows[0];
};

export const createPost = async (title: string, content: string) => {
  const newPost = await client.query(
    `INSERT INTO posts (title, content) values ($1, $2) RETURNING *`,
    [title, content]
  );
  return newPost.rows[0];
};

export const deletePost = async (postId: string) => {
  const deletedPost = await client.query("DELETE FROM posts where id = $1 RETURNING *", [postId]);
  return deletedPost.rows[0];
};
