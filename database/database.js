const User = require('./User')

const users = [
    new User('userOne', 'password1', 'Prague', '/images/profile-pictures/person1.jpg'),
    new User('userTwo', 'password2', 'Brno', '/images/profile-pictures/person1.jpg')
];

module.exports = {users};