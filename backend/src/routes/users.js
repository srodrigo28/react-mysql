import express from 'express';
import { getUsers, updateUser, addUser, deleteUser } from '../controllers/user.js'

const router = express.Router();

router.get("/", getUsers)

router.post("/users", addUser)

router.put("/users/:id", updateUser)

router.delete("/users/:id", deleteUser)

export default router;