import express from 'express';
import * as userController from '../controllers/users.controllers.js';

const router = express.Router();

router.get('/', userController.getAllUser);
router.post('/', userController.createUser);
router.get('/:name', userController.getUserByName);
router.put('/:name', userController.updateUser);
router.delete('/:name', userController.deleteUser);

export default router;