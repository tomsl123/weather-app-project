const express = require('express');
const router = express.Router();
const loginService = require('../services/loginService');

/* GET login page. */
router.get('/', function(req, res) {
    res.render('login', { title: 'Login' });
});

/* POST login request. */
router.post('/', function(req, res) {
    const sessionToken = loginService.validateLogin(req.body.username, req.body.password);

    if(sessionToken === false) {
        res.sendStatus(401);
    }
    else {
        res.send(sessionToken);
    }
});

module.exports = router;