import asyncHandler from 'express-async-handler';
import * as userService from '../services/user.services.js';

// GET '/users'
export const getAllUser = async (req, res) => {
    const users = await userService.getAllUsers(req.query);
    res.json(users);
};

// GET, '/users/:name'
export const getUserByName = async (req, res) => {
    const user = await userService.getUserByName(req.params.name);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
};

// POST '/users'
export const createUser = async (req, res) => {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
};

// UPDATE '/users/:name'
export const updateUser = async (req, res) => {
    const updatedUser = await userService.updateUser(req.params.name, req.body);
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
};

// DELETE '/users/:name'
export const deleteUser = async(req, res) => {
    const deleted = await userService.deleteUser(req.params.name);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
};