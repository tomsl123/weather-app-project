const express = require('express');
const router = express.Router();
const apiService = require('../services/apiService');

/* GET home page. */
router.get('/:username/city', function(req, res) {
    const username = req.params.username;
    if(!apiService.validateUsername(username)) {
        res.sendStatus(404);
    }
    else {
        res.send(apiService.getUserCityByUsername(username));
    }
});

module.exports = router;