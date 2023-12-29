import { client } from "../config/initializeDB";

export const getAllComments = async (postId: string) => {
  const allComments = await client.query(
    "SELECT * FROM comments where post_id = $1",
    [postId]
  );
  return allComments.rows;
};

export const getSingleComment = async (commentId: string) => {
  const singleComment = await client.query(
    `SELECT * FROM comments WHERE id = $1`,
    [commentId]
  );
  return singleComment.rows[0];
};

export const createComment = async (text: string, postId: string) => {
  const newComment = await client.query(
    `INSERT INTO comments (text, post_id) values ($1, $2) RETURNING *`,
    [text, postId]
  );
  return newComment.rows[0];
};

export const deleteComment = async (postId: string, commentId: string) => {
  const deletedComment = await client.query(
    "DELETE FROM comments WHERE post_id = $1 AND id = $2",
    [postId, commentId]
  );
  return { message: "Comment deleted successfully" };
};

export const deleteCommentsForPost = async (postId: string) => {
  const deleteAll = await client.query(
    `DELETE FROM comments WHERE post_id = $1`,
    [postId]
  );
  return { message: `Deleted comments for post with ID ${postId}` };
};
