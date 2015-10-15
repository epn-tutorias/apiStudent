var express = require('express')
var router = express.Router()

var Users = require('../helper/userHelper')
var userdb = Users()

createUser = function (req, res) {
	userdb.createUser(req, function (err, user){
		if(err) res.send(err)
		else res.send('User was create successfull: ' + user)
	})
}

findAllUser = function (req, res) {
	userdb.findAllUser(function (err, users){
		if(err) res.send(err)
		else res.send('Users are finded: ' + users)
	})
}

findIdUser = function (req, res) {
	userdb.findIdUser(req.params.id, function (err, user){
		if(err) res.send(err)
		else res.send('User finded: ' + user)
	})
}

updateUser = function (req, res) {
	userdb.updateUser(req, function (err, user){
		if(err) res.send(err)
		else res.send('User was update data: ' + user)
	})
}

deleteUser = function (req, res) {
	userdb.deleteUser(req, function (err, user){
		if(err) res.send(err)
		else res.send('User was delete' + user)
	})
}


router.post('/user', createUser)
router.get('/users', findAllUser)
router.get('/users/:id', findIdUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router