var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'APP gestion de Tutorias EPN FIM' });
});

router.get('/createStudent', function (req, res){
	res.render('createStudent', { title: 'Registro de Estudiante' })
})

router.get('/createTutor', function (req, res){
	res.render('createTutor', { title: 'Registro de Tutor' })
})

router.get('/listStudents', function (req, res){
	res.render('listStudents', { title: 'Lista de Estudiantes' })
})

router.get('/listTutors', function (req, res){
	res.render('listTutors', { title: 'Lista de Tutores' })
})

module.exports = router;
