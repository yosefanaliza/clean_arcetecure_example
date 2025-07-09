import asyncHandler from 'express-async-handler';
import * as userService from '../services/user.services.js';

// Get all users
export const getAllUser = asyncHandler(async (req, res) => {
    const users = await userService.getAllUsers(req.query);
    res.json(users);
});

// Get user by name
export const getUserByName = asyncHandler(async (req, res) => {
    const user = await userService.getUserByName(req.params.name);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// Create new user
export const createUser = asyncHandler(async (req, res) => {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
});

// Update user
export const updateUser = asyncHandler(async (req, res) => {
    const updatedUser = await userService.updateUser(req.params.name, req.body);
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
});

// Delete user
export const deleteUser = asyncHandler(async (req, res) => {
    const deleted = await userService.deleteUser(req.params.name);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
});