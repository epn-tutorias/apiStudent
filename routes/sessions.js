var express = require('express');
var router = express.Router();
var async = require('async')

var Students = require('../helper/studentHelper')
var Tutors = require('../helper/tutorHelper')
var Users = require('../helper/userHelper')

var studentdb = Students()
var tutordb = Tutors()
var usersdb = Users()

login = function  (req, res) {
	// body...
	res.render('login', { title: 'Debes logearte antes de empezar.... GRACIAS!!!' })
}

loginAuthenticate = function (req, res) {

	var usr = []

	async.series([autStudent, 
					autTutor,
					autUser],
					userSession)

	function autStudent (done){

		studentdb.autheStudent(req.body.userEmail, req.body.userPass, function (err, student){
			if (student.length > 0) usr = student

			done()
		})
	}

	function autTutor (done){
		tutordb.autheTutor(req.body.userEmail, req.body.userPass, function (err, tutor){
			if (tutor.length > 0) usr = tutor
			
			done()
		})
	}

	function autUser (done){
		usersdb.autheUser(req.body.userEmail, req.body.userPass, function (err, user){
			if (user.length > 0) usr = user

			done()
		})
	}

	function userSession (err){

		if(usr.length > 0){
			req.session.name = usr[0]._id
			req.session.id = usr[0]._id
			req.session.rol = usr[0].Rol

			res.render('menu', { title: 'Gracias por entrar a nuestra plataforma', user : usr})
		}else{
			res.render('login', { title : "Por favor iniciar sesion"})
		}

	}
}

/* GET home page. */
router.get('/login', login)
router.post('/loginAuthenticate', loginAuthenticate)

module.exports = router;