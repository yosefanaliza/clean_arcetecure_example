import * as userController from '../controllers/users.controllers.js';

function userRoutes(req, res) {
    switch (req.method) {
        case 'GET':
            userController.getAllUser(req, res);
            break;
        case 'POST':
            // Handle POST request
            res.send('POST user');
            break;
        case 'PUT':
            // Handle PUT request
            res.send('PUT user');
            break;
        case 'DELETE':
            // Handle DELETE request
            res.send('DELETE user');
            break;
        default:
            res.status(405).send('Method Not Allowed');
    }
}

export default userRoutes;