const express = require('express');
const router = express.Router();

/* GET index page (redirect to home). */
router.get('/', function(req, res) {
  res.redirect('/home');
});

module.exports = router;
