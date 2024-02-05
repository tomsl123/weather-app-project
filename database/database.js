const User = require('./User')

const users = [
    new User('userOne', 'password1', 'Berlin', '/images/profile-pictures/person2.png'),
    new User('userTwo', 'password2', 'Brno', '/images/profile-pictures/person1.jpg')
];

module.exports = {users};