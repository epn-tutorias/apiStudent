var express = require('express');
var router = express.Router();

var Grdt = require('../helper/graduate')
var grdtdb = Grdt()
/* GET home page. */
router.get('/login', function(req, res) {
  res.render('login');
});
router.get('/register', function(req, res){
	res.render('register')
})

router.get('/listGdt', function(req, res){
	grdtdb.findAllGraduates(function(err,graduates){
		if(err) res.send(err)
		else res.render('listGdt', {graduates : graduates})
	})
})

router.get('/editGdt', function(req, res){
	res.render('editGdt')
})

module.exports = router;
