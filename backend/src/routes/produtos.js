import express from 'express';

import { getProdutos, addProduto } from '../controllers/produto.js';

const router = express.Router();

router.get("/produtos", getProdutos);
router.post("/produtos", addProduto);

export default router;