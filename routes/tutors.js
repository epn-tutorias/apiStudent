var express =  require('express')
var router = express.Router()
var Tutors = require('../helper/tutorHelper')
var tutordb = Tutors()

findAllTutor = function (req, res) {
	tutordb.findAllTutors(function (err, tutors) {
		res.send(tutors)
	})
}

createTutor = function (req, res) {
	tutordb.createTutor(req, function (err, tutor){
		if(err) res.send(err)
		else res.send('Tutor was create ' + tutor)
	})
}

findIdTutors = function (req, res) {
	tutordb.findIdTutor(req.params.id, function (err, tutor){
		if(err) res.send(err)
		else res.send('Tutor was create ' + tutor)
	})
}

updateTutors = function (req, res){
	tutordb.updateTutor(req, function (err, tutor){
		if(err) res.send(err)
		else res.send('Tutor was create ' + tutor)
	})
}

deleteTutors = function (req, res){
	tutordb.deleteTutor(req, function (err, tutor){
		if(err) res.send(err)
		else res.send('Tutor was create ' + tutor)
	})
}

router.post('/tutor', createTutor)

router.get('/tutors', findAllTutor)

router.get('/tutors/:id', findIdTutors)

router.put('/tutors/:id', updateTutors)

router.delete('/tutors/:id', deleteTutors)

module.exports = router