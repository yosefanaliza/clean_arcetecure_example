import { createPostDB, getAllPostsDB } from '../data-access/post.da.js';

export function createPostService(post) {
    // Validate required fields
    if (!post.title || !post.content) {
        throw new Error('Post must have a title and content');
    }
    // Add timestamps and default values
    post.createdAt = new Date().toISOString();
    post.updatedAt = post.createdAt;
    post.published = post.published ?? false;
    // Optionally generate a unique ID
    post.id = post.id || Math.random().toString(36).substr(2, 9);
    return createPostDB(post);
}

export function getAllPostsService({ publishedOnly = false, sortBy = 'createdAt' } = {}) {
    let posts = getAllPostsDB();
    if (publishedOnly) {
        posts = posts.filter(p => p.published);
    }
    posts.sort((a, b) => {
        if (sortBy === 'createdAt') return new Date(b.createdAt) - new Date(a.createdAt);
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        return 0;
    });
    // Optionally mask sensitive fields
    return posts.map(({ content, ...rest }) => rest);
}
