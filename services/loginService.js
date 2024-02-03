const database = require('../database/database');

/**
 * Validates a login attempt
 * @param {string} username
 * @param {string} password
 * @return {string|false} session token or false in case of failure
 */
exports.validateLogin = function (username, password) {
    const foundUser = database.users.find(user => user.username === username && user.password === password);

    if(foundUser === undefined) return false;
    else return generateSessionToken(username);
}

/**
 * Generates a unique session token
 * @param {string} username
 * @return {string} session token
 */
function generateSessionToken(username) {
    return username + '_' + Date.now();
}