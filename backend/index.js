import  express  from "express";
import cors from "cors";

import userRoutes from "./src/routes/users.js";
import produtosRoutes from "./src/routes/produtos.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/", produtosRoutes);

app.listen(8080);