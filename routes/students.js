var express = require('express');
var router = express.Router();
var Students = require('../models/students')
var Tutors = require('../models/tutors')



crearteStudent = function(req, res){
	console.log(req.method, req.path, req.body)

	Tutors.find({tutorName : 'TutorMauro2'}, function (err, tutor){
	  	if(err) console.log('Error: ' + err)
	  	
	  	console.log(tutor)
	  	var students = new Students ({
		
			studentName 		: req.body.studentName 		|| 'noName',  
			studentLastName 	: req.body.studentLastName 	|| 'noLastName',  
			studentEmail 		: req.body.studentEmail 	|| 'no@email.com',  
			studentCareer	 	: req.body.studentCareer 	|| 'Mecanica',  
			studentRol 			: req.body.studentRol 		|| 'student',  
			studentPassword 	: req.body.studentPassword 	|| 'noPass',  
			studentTutor 		: tutor[0]._id, 
			studentPeriod		: req.body.studentPeriod 	|| 'ordinary',  
			studentPhone		: req.body.studentPhone 	|| '11111111',  
			studentCellPhone	: req.body.studentCellPhone || '11111111',  
			studentCreditsAc	: req.body.studentCreditsAc || '11111111',  
			studentCod			: req.body.studentCod 		|| '11111111'
		})

		students.save(function (err){
			if(err) console.log('Error to create student: ' + err)
			else console.log('Student was create')

			res.send(students)
		})
  	})

	/*tutor.save(function (err){
		if(err) console.log('Error en tutor: ' + err)
		else console.log('Tutor was create')
	})*/
	
}

findAllStudents = function(req, res){
	res.set('Content-Type', 'application/json')

	  Students.find(function (err, students){
	  	if(err) console.log('Error: ' + err)
	  	else res.send(students)
	  })
}

findIdStudent = function(req, res){

}

updateStudent = function(req, res){

}

deleteStudent = function(req, res){

}

// POST create a Student
router.post('/student', crearteStudent)

/* GET students listing. */
router.get('/students', findAllStudents);

// GET - find a student with a specific ID
router.get('/students/:student_id', findIdStudent)

// PUT - Update a register already exist for Student

router.put('/students/:student_id', updateStudent)

// DELETE - delete a register from student
router.delete('/students/:student_id', deleteStudent)





module.exports = router;
