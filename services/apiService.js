const database = require('../database/database');

/**
 * Validates that username exists in the database
 * @param {string} username
 * @return {boolean} if user with this username exists or not
 */
exports.validateUsername = function (username) {
    const foundUser = database.users.find(user => user.username === username);
    return foundUser !== undefined;
}

/**
 * Gets city of a user from database
 * @param {string} username
 */
exports.getUserCityByUsername = function (username) {
    const foundUser = database.users.find(user => user.username === username);
    return foundUser.city
}

/**
 * Gets profile picture path of a user from database
 * @param {string} username
 */
exports.getUserProfilePicturePathByUsername = function (username) {
    const foundUser = database.users.find(user => user.username === username);
    return foundUser.profilePicturePath
}