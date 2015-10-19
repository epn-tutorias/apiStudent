var Tutors = require('../models/tutors')
var logger = require('../lib/logger')

module.exports = function(){

	function findAllTutors (callback) {
		Tutors.find(function  (err, tutors) {
			if(err) callback(err)
			else callback(null, tutors)
		})
	}

	function findIdTutor (_id, callback){
		Tutors.findById(_id, function (err, tutor) {
	  		if (err) callback(err)
	  		else callback(null, tutor)
	  	})
	}

	function updateTutor (req, callback){
		Tutors.findById(req.params.id, function (err, tutor){

			tutor.Name 				= req.body.tutorName
			tutor.LastName 			= req.body.tutorLastName
			tutor.Email 			= req.body.tutorEmail
			tutor.Career	 		= req.body.tutorCareer
			tutor.Rol 				= req.body.tutorRol
			tutor.Dep				= req.body.tutorDep
			tutor.Password	 		= req.body.tutorPassword
			tutor.Cod				= req.body.tutorCod
			tutor.Phone   			= req.body.tutorPhone
			tutor.CellPhone			= req.body.tutorCellPhone
			tutor.CantStudents		= req.body.tutorCantStudents
			tutor.Ident				= req.body.tutorIdent

			tutor.save(function (err){
				if (err) callback(err)
				else callback(null, tutor)
			})

		})
	}

	function createTutor (req, callback){

		var tutor = new Tutors({
			Name 			: req.body.tutorName,
			LastName 		: req.body.tutorLastName,
			Email 			: req.body.tutorEmail,
			Career	 		: req.body.tutorCareer,
			Rol 			: req.body.tutorRol,
			Dep				: req.body.tutorDep, 
			Password	 	: req.body.tutorPassword,
			Cod				: req.body.tutorCod,
			Phone   		: req.body.tutorPhone,
			CellPhone		: req.body.tutorCellPhone,
			CantStudents	: req.body.tutorCantStudents,
			Ident			: req.body.tutorIdent
		})

		tutor.save(function (err){
			if (err) callback(err)
			else callback(null, tutor)
		})

	}

	function deleteTutor (req, callback){
		Tutors.findById(req.params.id, function (err, tutor){
			tutor.remove(function (err){
				if (err) callback(err)
				else callback(null, tutor)
			})
		})
	}

	autheTutor = function(userEmail, userPass, callback) {
		
		Tutors.find()
				.where('Email').equals(userEmail)
				.where('Password').equals(userPass)
				.exec(getTutor)

				function getTutor (err, tutor){
					if(err) callback(err)
					else callback(null, tutor)	
				}
	}

	return{
		findAllTutors 	: findAllTutors,
		findIdTutor		: findIdTutor,
		updateTutor		: updateTutor,
		createTutor		: createTutor,
		deleteTutor		: deleteTutor,
		autheTutor		: autheTutor
	}

}