var express = require('express');
var router = express.Router();
var Tutors = require('../models/tutors')

crearteTutor = function(req,res){
	console.log(req.method, req.path, req.body)

	var tutor = new Tutors({
							tutorName 			: req.body.tutorName  			|| 'noName', 
							tutorLastName 		: req.body.tutorLastName  		|| 'noLasName', 
							tutorEmail 			: req.body.tutorEmail  			|| 'no@email.com', 
							tutorCareer	 		: req.body.tutorCareer  		|| 'Mecanica', 
							tutorRol 			: req.body.tutorRol  			|| 'tutor', 
							tutorPassword	 	: req.body.tutorPassword  		|| 'noPass', 
							tutorCod			: req.body.tutorCod  			|| '1223', 
							tutorPhone   		: req.body.tutorPhone  			|| '11111', 
							tutorCellPhone		: req.body.tutorCellPhone  		|| '11111', 
							tutorCantStudents	: req.body.tutorCantStudents  	|| '11111'
					  	  })

	tutor.save(function (err){
		if(err) console.log('Error to create tutor: ' + err)
		else console.log('Tutor was create')

		res.send(tutor)
	})  
}

findAllTutors = function(req,res){
	res.set('Content-Type', 'application/json')
  Tutors.find(function (err, tutor){
  	if(err) console.log('Error: ' + err)
  	else res.send(tutor)
  })
}

findIdTutors = function(req, res){}
updateTutors = function(req, res){}
deleteTutors = function(req, res){}


// POST create a Student
router.post('/tutor', crearteTutor)

/* GET tutors listing. */
router.get('/tutors', findAllTutors);

// GET - find a tutors with a specific ID
router.get('/tutors/:tutor_id', findIdTutors)

// PUT - Update a register already exist for tutors

router.put('/tutors/:tutor_id', updateTutors)

// DELETE - delete a register from tutors
router.delete('/tutors/:tutor_id', deleteTutors)

module.exports = router;