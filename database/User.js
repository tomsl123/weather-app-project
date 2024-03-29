/**
 * Simple class to represent a user
 * @type {User}
 */
module.exports = class User {
    constructor(username, password, city, profilePicturePath) {
        this.username = username;
        this.password = password;
        this.city = city;
        this.profilePicturePath = profilePicturePath;
    }
}