import * as userService from '../services/user.services.js';

// GET '/users'
export const getAllUser = async (req, res) => {
    try {
        const users = await userService.getAllUsers(req.query);
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET, '/users/:name'
export const getUserByName = async (req, res) => {
    try {
        const user = await userService.getUserByName(req.params.name);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST '/users'
export const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// UPDATE '/users/:name'
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.name, req.body);
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE '/users/:name'
export const deleteUser = async (req, res) => {
    try {
        const deleted = await userService.deleteUser(req.params.name);
        if (!deleted) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};