import * as userController from '../controllers/users.controllers.js';

function userRoutes(req, res) {
    switch (req.method) {
        case 'GET':
            userController.getAllUser(req, res);
            break;
        case 'POST':
            userController.createUser(req, res);
            break;
        case 'PUT':
            userController.updateUser(req, res);
            break;
        case 'DELETE':
            userController.deleteUser(req, res);
            res.send('DELETE user');
            break;
        default:
            res.status(405).send('Method Not Allowed');
    }
}

export default userRoutes;