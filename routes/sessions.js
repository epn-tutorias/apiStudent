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

	/*usersdb.autheUser(req.body.userEmail, req.body.userPass, function (err, user){
		if(err){
			res.render('index', { title: 'Debes logearte antes de empezar.... GRACIAS!!!'})
		}else{
			req.session.name = user._id
			res.render('menu', { title: 'Gracias por loguearte',
										user : user })
		}
	})
	*/
/*	tutordb.autheTutor(req.body.userEmail, req.body.userPass, function (err, tutor){
		console.log(tutor)
		console.log('Err: ' + err)
		if(err == null){
			console.log('Err: ' + err)
		}else{
			req.session.name = tutor._id
			res.render('menu', { title: 'Gracias por loguearte',
										user : tutor })
		}
	})*/

	studentdb.autheStudent(req.body.userEmail, req.body.userPass, function (err, student){

		if(student.length > 0){
			req.session.name = student[0]._id
			res.render('menu', { title: 'Gracias por loguearte',
										user : student
									})
		}else{
			res.render('login', { title : "Por favor logueate"})
		}
	})
}

/* GET home page. */
router.get('/login', login)
router.post('/loginAuthenticate', loginAuthenticate)

module.exports = router;