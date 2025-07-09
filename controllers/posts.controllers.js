import asyncHandler from 'express-async-handler';
import { createPostService, getAllPostsService } from '../services/post.services.js';

export const createPost = asyncHandler(async (req, res) => {
    const created = createPostService(req.body);
    res.status(201).json(created);
});

export const getAllPosts = asyncHandler(async (req, res) => {
    const posts = getAllPostsService(req.query);
    res.json(posts);
});
