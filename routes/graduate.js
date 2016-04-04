var express = require('express');
var router = express.Router();

var Graduates = require('../helper/graduate')
var graduatedb = Graduates()

createGraduate = function(req, res){
	graduatedb.createGraduate(req, function(err, graduate){
		if (err) res.send(err)
		else res.send(graduate)
	})
}
findGraduate = function(req, res){
	graduatedb.findGraduate(req, function(err, graduate){
		if (err) res.send(err)
		else res.send(graduate)
	})
}
findAllGraduates = function(req, res){
	graduatedb.findAllGraduates(function(err, graduates){
		if (err) res.send(err)
		else res.send(graduates)
	})
}
deleteGraduate = function(req, res){
	graduatedb.deleteGraduate(req, function(err, graduate){
		if (err) res.send(err)
		else res.send(graduate)
	})
	
}
updateGraduate = function(req, res){
	graduatedb.updateGraduate(req, function(err, graduate){
		if (err) res.send(err)
		else res.send(graduate)
	})
}


router.post('/createGraduate',createGraduate)
router.get('/graduate/:id',findGraduate)
router.get('/',findAllGraduates)
router.delete('/graduate/:id',deleteGraduate)
router.put('/graduate/:id',updateGraduate)





module.exports = router;