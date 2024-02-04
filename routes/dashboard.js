const express = require('express');
const router = express.Router();

/* GET dashboard page. */
router.get('/', function(req, res) {
    if(req.cookies.sessionToken === undefined) {
        res.redirect('/login');
    }

    res.render('dashboard', { title: 'Dashboard' });
});

module.exports = router;