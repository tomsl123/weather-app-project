const express = require('express');
const router = express.Router();
const apiService = require('../services/apiService');
const loginService = require('../services/loginService');

/* GET user city. */
router.get('/:username/city', function(req, res) {
    const username = req.params.username;
    if(!apiService.validateUsername(username)) {
        res.sendStatus(404);
    }
    else {
        res.send(apiService.getUserCityByUsername(username));
    }
});

/* GET user profile picture. */
router.get('/:username/profile-picture-path', function(req, res) {
    const username = req.params.username;
    if(!apiService.validateUsername(username)) {
        res.sendStatus(404);
    }
    else {
        res.send(apiService.getUserProfilePicturePathByUsername(username));
    }
});

/* POST login request. */
router.post('/login', function(req, res) {
    const sessionToken = loginService.validateLogin(req.body.username, req.body.password);
    if(sessionToken === false) {
        res.sendStatus(401);
    }
    else {
        res.send(sessionToken);
    }
});

module.exports = router;