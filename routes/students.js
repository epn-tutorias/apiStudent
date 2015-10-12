var express = require('express');
var router = express.Router();
var logger = require('../lib/logger')

var Students = require('../helper/studentHelper')
var studentdb = Students()

crearteStudent = function(req, res){
	studentdb.createStudent(req, function (students) {
		console.log(students)
		res.send(students)
	})
}

findAllStudents = function(req, res){
	studentdb.findAllStudents(function (students) {
		console.log(students)
		res.send(students)
	})
}

findIdStudent = function(req, res){
	studentdb.findIdStudent(req.params.id, function (students) {
		console.log(students)
		res.send(students)
	})
}

updateStudents = function(req, res){
	studentdb.updateStudent(req, function (students) {
		console.log(students)
		res.send(students)
	})
}

deleteStudents = function(req, res){
	studentdb.deleteStudent(req, function (students) {
		console.log(students)
		res.send(students)
	})
}

// POST create a Student
router.post('/student', crearteStudent)

/* GET students listing. */
router.get('/students', findAllStudents);

// GET - find a student with a specific ID
router.get('/students/:id', findIdStudent)

// PUT - Update a register already exist for Student

router.put('/students/:id', updateStudents)

// DELETE - delete a register from student
router.delete('/students/:id', deleteStudents)





module.exports = router;
