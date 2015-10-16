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
		  		studentName 		= req.body.studentName 		 
				studentLastName 	= req.body.studentLastName 	  
				studentEmail 		= req.body.studentEmail 	  
				studentCareer	 	= req.body.studentCareer 	  
				studentRol 			= req.body.studentRol 		  
				studentPassword 	= req.body.studentPassword 	  
				studentTutor 		= req.body.studentTutor 
				studentPeriod		= req.body.studentPeriod 	
				studentPhone		= req.body.studentPhone 	 
				studentCellPhone	= req.body.studentCellPhone 
				studentCreditsAc	= req.body.studentCreditsAc 
				studentIdent		= req.body.studentIdent		  
				studentCod			= req.body.studentCod 		

		  		student.save(function(err) {
		  			if(err) callback(err)
					else callback(null, student)
		  		})
		  	})
		}

		createStudent	=	function (req, callback){
			  	
			  	var student = new Students ({
				
					studentName 		: req.body.studentName,  
					studentLastName 	: req.body.studentLastName,  
					studentEmail 		: req.body.studentEmail,  
					studentCareer	 	: req.body.studentCareer,  
					studentRol 			: req.body.studentRol,  
					studentPassword 	: req.body.studentPassword,  
					studentTutor 		: req.body.studentTutor, 
					studentPeriod		: req.body.studentPeriod,  
					studentPhone		: req.body.studentPhone,  
					studentCellPhone	: req.body.studentCellPhone,  
					studentCreditsAc	: req.body.studentCreditsAc,
					studentIdent		: req.body.studentIdent,  
					studentCod			: req.body.studentCod 		
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
				.where('studentEmail').equals(userEmail)
				.where('studentPassword').equals(userPass)
				.exec(getStudent)

				function getStudent (err, student){
					if(err) callback(err)
					else callback(null, student)	
				}
		}

		return{
			findAllStudents : findAllStudents,
			findIdStudent 	: findIdStudent,
			autheStudent 	: autheStudent,
			updateStudent	: updateStudent,
			createStudent	: createStudent,
			deleteStudent	: deleteStudent
		}
}