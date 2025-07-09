import { getAllUsersDB, getUserDB, createUserDB, updateUserDB, deleteUserDB } from '../data-access/user.da.js';

// This function initializes a user by checking if the user exists in the database.
export function initUser() {
    const userName = console.readline.question("Enter your name: ")
    let userFromDB = getUserDB(userName)

    if (userFromDB) {
        // Optionally update last login timestamp
        userFromDB = updateUserDB(userName, { lastLogin: new Date().toISOString() });
        return userFromDB;
    } else {
        // Create a new user with default properties
        const newUser = {
            name: userName,
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
            role: 'user',
            active: true
        };
        createUserDB(newUser);
        return newUser;
    }
}

export async function getAllUsers({ activeOnly = false, sortBy = 'name' } = {}) {
    let users = getAllUsersDB();
    if (activeOnly) {
        users = users.filter(u => u.active);
    }
    users.sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'createdAt') return new Date(a.createdAt) - new Date(b.createdAt);
        return 0;
    });
    return users;
}

export async function getUserByName(name) {
    const user = getUserDB(name);
    if (!user) throw new Error('User not found');
    // Optionally mask sensitive fields
    const { password, ...safeUser } = user;
    return safeUser;
}

export async function createUser(user) {
    // Validate required fields
    if (!user.name) throw new Error('Name is required');
    if (getUserDB(user.name)) throw new Error('User already exists');
    user.createdAt = new Date().toISOString();
    user.active = true;
    return createUserDB(user);
}

export async function updateUser(name, updatedUser) {
    const user = getUserDB(name);
    if (!user) throw new Error('User not found');
    if (updatedUser.name && updatedUser.name !== name && getUserDB(updatedUser.name)) {
        throw new Error('New username already exists');
    }
    updatedUser.updatedAt = new Date().toISOString();
    return updateUserDB(name, updatedUser);
}

export async function deleteUser(name) {
    const user = getUserDB(name);
    if (!user) throw new Error('User not found');
    return deleteUserDB(name);
}