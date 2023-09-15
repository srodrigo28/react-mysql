import express from 'express';

import { getProdutos, addProduto, getProdutosOne, deleteProduto, updateProduto } from '../controllers/produto.js';

const router = express.Router();

router.post("/produtos", addProduto);

router.get("/produtos", getProdutos);
router.get("/produtos/:id", getProdutosOne);

router.put("/produtos/:id", updateProduto);
router.delete("/produtos/:id", deleteProduto);

export default router;