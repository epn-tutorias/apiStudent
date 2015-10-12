var express = require('express');
var router = express.Router();

/*var Tutors = require('../helper/tutorHelper')
var tutordb = Tutors()
*/
var Students = require('../helper/studentHelper')
var studentdb = Students()

login = function  (req, res) {
	// body...
	res.render('login', { title: 'Debes logearte antes de empezar.... GRACIAS!!!' })
}

loginAuthenticate = function (req, res) {
	studentdb.autheStudent(req.body.userEmail, req.body.userPass, function(student){
		if(student){
			req.session.name = student._id
			res.render('menu', { title: 'Gracias por loguearte',
										student : student })
		}else{
			res.render('index', { title: 'Debes logearte antes de empezar.... GRACIAS!!!',
										student : student })
		}
	})
}

/* GET home page. */
router.get('/login', login)
router.post('/loginAuthenticate', loginAuthenticate)

module.exports = router;