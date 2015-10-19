var Students = require('../models/students')
var logger = require('../lib/logger')

module.exports = function(){

		findAllStudents = function (callback){
			Students.find(function (err, students){
				if(err) callback(err)
				else callback(null, students)
			})
		}	

		findIdStudent	=	function (_id, callback){
			Students.findById(_id, function(err, student) {
		  		if(err) callback(err)
				else callback(null, student)	
		  	})
		}

		updateStudent	=	function (req, callback){

			Students.findById(req.params.id, function(err, student) {
		  		student.Name 		= req.body.studentName 		 
				student.LastName 	= req.body.studentLastName 	  
				student.Email 		= req.body.studentEmail 	  
				student.Career	 	= req.body.studentCareer 	  
				student.Rol 		= req.body.studentRol 		  
				student.Password 	= req.body.studentPassword 	  
				student.Tutor 		= req.body.studentTutor 
				student.Period		= req.body.studentPeriod 	
				student.Phone		= req.body.studentPhone 	 
				student.CellPhone	= req.body.studentCellPhone 
				student.CreditsAc	= req.body.studentCreditsAc 
				student.Ident		= req.body.studentIdent		  
				student.Cod			= req.body.studentCod 		

		  		student.save(function(err) {
		  			if(err) callback(err)
					else callback(null, student)
		  		})
		  	})
		}

		createStudent	=	function (req, callback){
			  	
			  	var student = new Students ({
				
					Name 		: req.body.studentName,  
					LastName 	: req.body.studentLastName, 
					Ident		: req.body.studentIdent,  
					Email 		: req.body.studentEmail,  
					Career	 	: req.body.studentCareer,  
					Rol 		: req.body.studentRol,  
					Password 	: req.body.studentPassword,  
					Tutor 		: req.body.studentTutor, 
					Period		: req.body.studentPeriod,  
					Phone		: req.body.studentPhone,  
					CellPhone	: req.body.studentCellPhone,  
					CreditsAc	: req.body.studentCreditsAc, 
					Cod			: req.body.studentCod 		
				})

				student.save(function (err){
					if(err) callback(err)
					else callback(null, student)
				})	
		}

		deleteStudent	=	function (req, callback){
			Students.findById(req.params.id, function(err, student) {
		 	
		  			student.remove(function(err) {
		  				if(err) callback(err)
		  				else callback(null, student)
		  			})
		  	})
		}

		autheStudent = function(userEmail, userPass, callback) {

			Students.find()
				.where('Email').equals(userEmail)
				.where('Password').equals(userPass)
				.exec(getStudent)

				function getStudent (err, student){
					if(err) callback(err)
					else callback(null, student)	
				}
		}

		findStudentByTutor = function (idTutor, callback){
			Students.find()
				.where('Tutor').equals(idTutor)
				.exec(getStudentsByTutor)

				function getStudentsByTutor (err, students){
					if(err) callback(err)
					else callback(null, students) 
				}
		}

		return{
			findAllStudents : findAllStudents,
			findIdStudent 	: findIdStudent,
			autheStudent 	: autheStudent,
			updateStudent	: updateStudent,
			createStudent	: createStudent,
			deleteStudent	: deleteStudent,
			findStudentByTutor : findStudentByTutor
		}
}