import { readItems, writeItems } from './fs.da.js';

export function getAllPostsDB() {
    return readItems();
}

export function createPostDB(post) {
    const posts = getAllPostsDB();
    posts.push(post);
    writeItems(posts);
    return post;
}
