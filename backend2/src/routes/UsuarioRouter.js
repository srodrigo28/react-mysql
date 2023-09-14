import express from 'express';
import { getUsuarios } from '../controllers/UsuarioController.js';

const router = express.Router();

router.get("/usuario", getUsuarios)

export default router;