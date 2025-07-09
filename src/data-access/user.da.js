import { readItems, writeItems } from './fs.da.js';

export function getAllUsersDB() {
    return readItems();
}

export function getUserDB(userName) {
    const users = getAllUsersDB();
    return users.find(user => user.name === userName);
}

export function createUserDB(user) {
    const users = getAllUsersDB();
    users.push(user);
    writeItems(USERS_FILE, users);
    return user;
}

export function updateUserDB(userName, updatedUser) {
    const users = getAllUsersDB();
    const idx = users.findIndex(u => u.name === userName);
    if (idx === -1) return null;
    users[idx] = { ...users[idx], ...updatedUser };
    writeItems(USERS_FILE, users);
    return users[idx];
}

export function deleteUserDB(userName) {
    let users = getAllUsersDB();
    const initialLength = users.length;
    users = users.filter(u => u.name !== userName);
    writeItems(USERS_FILE, users);
    return users.length < initialLength;
}