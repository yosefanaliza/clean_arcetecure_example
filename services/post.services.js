import { createPostDB, getAllPostsDB } from '../data-access/post.da.js';

export function createPostService(post) {
    // Add any business logic or validation here
    return createPostDB(post);
}

export function getAllPostsService() {
    return getAllPostsDB();
}
