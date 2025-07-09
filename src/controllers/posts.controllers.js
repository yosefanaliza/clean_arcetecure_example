import { createPostService, getAllPostsService } from '../services/post.services.js';

// POST '/posts'
export const createPost = async (req, res) => {
    try {
        const created = await createPostService(req.body);
        return res.status(201).json(created);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// GET '/posts'
export const getAllPosts = async (req, res) => {
    try {
        const posts = await getAllPostsService(req.query);
        return res.status(201).json(posts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
