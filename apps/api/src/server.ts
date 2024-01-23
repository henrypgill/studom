import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { homeRouter } from "./routes/home";
import { exampleRouter } from "./routes/exampleRouter";
import { PrismaClient } from "@studom/database";

dotenv.config();

const app = express();
export const database = new PrismaClient();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/", homeRouter);
app.use("/example", exampleRouter);

console.log("Connecting to database...");
connectToDbAndStartListening()
  .then(async () => {
    await database.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await database.$disconnect();
    process.exit(1);
  });

async function connectToDbAndStartListening() {
  console.log("Connected to database");

  console.log("Starting express server...");
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
}
