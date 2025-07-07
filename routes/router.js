import { userRoutes } from './user.routes.js';
import { postsRoutes } from './post.routes.js';

export function router(req, res) {
    switch (req.url) {
        case '/users':
            userRoutes(req, res);
            break;
        case '/posts':
            postsRoutes(req, res);
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not found');
    }
}