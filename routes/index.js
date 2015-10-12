var express = require('express');
var router = express.Router();
var Tutors = require('../models/tutors')
var Students = require('../models/students')

var Tutors = require('../helper/tutorHelper')
var tutordb = Tutors()

var Students = require('../helper/studentHelper')
var studentdb = Students()


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'APP gestion de Tutorias EPN FIM' });
});

router.get('/createStudent', function (req, res){
	tutordb.findAllTutors(function (tutors) {
		studentdb.findAllStudents(function (students) {
			res.render('createStudent', { title: 'Crear Estudiante',
		  								students : students,
		  								tutors : tutors })
		})
	})
})

router.get('/createTutor', function (req, res){
	res.render('createTutor', { title: 'Registro de Tutor' })
})


router.get('/listTutors', function (req, res){
	tutordb.findAllTutors(function (tutors) {
		res.render('listTutors', { title: 'Lista de Tutores',
	  								tutors: tutors})
	})
})
router.get('/listStudents', function (req, res){
	studentdb.findAllStudents(function (students) {
		res.render('listStudents', { title: 'Lista de Students',
	  								students : students })
	})
})

module.exports = router;
