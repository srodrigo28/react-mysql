import express from "express";

import { addUser, getUsers, updateUsers, deleteUser } from "./../controllers/users.js";

const router = express.Router();

router.get("/users", getUsers);

router.post("/users", addUser);

router.put("/users/:id", updateUsers);

router.delete("/users/:id", deleteUser);

export default router;