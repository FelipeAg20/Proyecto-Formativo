import express from "express";
import dotenv from "dotenv";
import { conexion } from "./src/db/conexion.js";
import { router } from "./src/routes/route.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;
app.use("/producto", router);
app.listen(port, function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`listening on port ${port}`);
  }
});
 