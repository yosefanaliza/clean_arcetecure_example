import express from 'express';
import * as userController from '../controllers/users.controllers.js';

const router = express.Router();

// GET '/users'
router.get('/', userController.getAllUser);

// POST '/users'
router.post('/', userController.createUser);

// GET, '/users/:name'
router.get('/:name', userController.getUserByName);

// PUT '/users/:name'
router.put('/:name', userController.updateUser);

// DELETE '/users/:name'
router.delete('/:name', userController.deleteUser);

export default router;