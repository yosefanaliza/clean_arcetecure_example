import express from 'express';
import * as postController from '../controllers/posts.controllers.js';

const router = express.Router();

router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);
// Add more post routes as needed

export default router;
