import express from 'express'
import { createUser, getUserById, getUsers, updateUserById } from "../controllers/userControllers.js";

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUserById);


export default router;