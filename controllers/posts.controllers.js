import { createPostService, getAllPostsService } from '../services/post.services.js';

export function createPost(req, res) {
    try {
        const post = req.body;
        const created = createPostService(post);
        res.status(201).json(created);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create post' });
    }
}

export function getAllPosts(req, res) {
    try {
        const posts = getAllPostsService();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get posts' });
    }
}
