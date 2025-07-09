import express from 'express';
import * as postController from '../controllers/posts.controllers.js';

const router = express.Router();

// GET '/posts'
router.get('/', postController.getAllPosts);

// POST '/posts'
router.post('/', postController.createPost);

// Add more post routes as needed

export default router;
