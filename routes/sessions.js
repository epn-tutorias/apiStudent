var express = require('express');
var router = express.Router();

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

	studentdb.autheStudent(req.body.userEmail, req.body.userPass, function (err, student){
		if(err){

			tutordb.autheTutor(req.body.userEmail, req.body.userPass, function (err, tutor){
				if(err){

					usersdb.autheUser(req.body.userEmail, req.body.userPass, function (err, user){
						if(err){
							res.render('index', { title: 'Debes logearte antes de empezar.... GRACIAS!!!'})
						}else{
							req.session.name = user._id
							res.render('menu', { title: 'Gracias por loguearte',
														user : user })
						}
					})

				}else{
					req.session.name = tutor._id
					res.render('menu', { title: 'Gracias por loguearte',
												user : tutor })
				}
			})

		}else{
			req.session.name = student._id
			res.render('menu', { title: 'Gracias por loguearte',
										user : student })
		}
	})
}

/* GET home page. */
router.get('/login', login)
router.post('/loginAuthenticate', loginAuthenticate)

module.exports = router;