/**
 * Simple class to represent a user
 * @type {User}
 */
module.exports = class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}