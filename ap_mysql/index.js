import express from "express";
import cors from "cors";

import useRotes from "./src/routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", useRotes);

app.listen(8080);