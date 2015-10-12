var express =  require('express')
var router = express.Router()
var Tutors = require('../helper/tutorHelper')
var tutordb = Tutors()

findAllTutor = function (req, res) {
	tutordb.findAllTutors(function (tutors) {
		console.log(tutors)
		res.send(tutors)
	})
}

createTutor = function (req, res) {
	tutordb.createTutor(req, function (tutor){
		res.send(tutor)
	})
}

findIdTutors = function (req, res) {
	tutordb.findIdTutor(req.params.id, function (tutor){
		res.send(tutor)
	})
}

updateTutors = function (req, res){
	tutordb.updateTutor(req, function (tutor){
		res.send(tutor)
	})
}

deleteTutors = function (req, res){
	tutordb.deleteTutor(req, function (tutor){
		res.send(tutor)
	})
}

router.post('/tutor', createTutor)

router.get('/tutors', findAllTutor)

router.get('/tutors/:id', findIdTutors)

router.put('/tutors/:id', updateTutors)

router.delete('/tutors/:id', deleteTutors)

module.exports = router