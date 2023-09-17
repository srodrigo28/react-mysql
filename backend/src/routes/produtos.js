import express from 'express';

import { 
    getProdutos, addProduto, getProdutosOne, deleteProduto, updateProduto } from '../controllers/produto.js';

const router = express.Router();

// Adicionar
router.post("/produtos", addProduto);

// Listar
router.get("/produtos", getProdutos);

// Listar Unico
router.get("/produtos/:id", getProdutosOne);

// Alterar
router.put("/produtos/:id", updateProduto);

// Deltar
router.delete("/produtos/:id", deleteProduto);

export default router;