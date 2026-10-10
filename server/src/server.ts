import "dotenv/config";

import express, { type Request, type Response } from "express";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const port: number = Number(process.env.PORT) || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is live");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
