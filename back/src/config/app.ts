import express from "express";
import { setupDatabase } from "./initializeDB";
import cors from "cors";
import { router as postsRoutes } from "../routes/posts.routes";
import { router as commentsRoutes } from "../routes/comments.routes";
import { errorHandler } from "../middlewares/errorHandler";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use(postsRoutes);
app.use(commentsRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  setupDatabase();
  console.log(`Server is running at http://localhost:${PORT}`);
});
