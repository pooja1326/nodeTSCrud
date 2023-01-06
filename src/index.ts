import express from "express";
import mongoose from "mongoose";

import { router } from "./routes/routes";
const app = express();
const PORT = 4011;
import db from "./config/db";
db.connect;
app.use(express.json());
app.use("/v1", router);

app.listen(PORT, (): void => {
  console.log(`server is listening on the  ${PORT}`);
});
