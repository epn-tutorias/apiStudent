var express = require('express');
var router = express.Router();
var tutors = require('../models/tutors')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;