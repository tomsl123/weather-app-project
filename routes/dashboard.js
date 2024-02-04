const express = require('express');
const router = express.Router();

/* GET dashboard page. */
router.get('/', function(req, res) {
    res.render('dashboard', { title: 'Dashboard' });
});

module.exports = router;