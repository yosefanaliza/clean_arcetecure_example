import * as postController from '../controllers/posts.controllers.js';

function postRoutes(req, res) {
    switch (req.method) {
        case 'GET':
            postController.getAllPosts(req, res);
            break;
        case 'POST':
            postController.createPost(req, res);
            break;
        default:
            res.status(405).send('Method Not Allowed');
    }
}

export default postRoutes;
