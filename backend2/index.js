import express from "express";
import cors from "cors";

import usuarioRouter from "./src/routes/UsuarioRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", usuarioRouter);

app.listen(8081);