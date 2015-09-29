var express = require('express');
var router = express.Router();
var Students = require('../models/students')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/student', function (req, res){
	res.send('POST student')
})

module.exports = router;
