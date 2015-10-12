var Tutors = require('../models/tutors')
var logger = require('../lib/logger')

module.exports = function(){

	function findAllTutors (callback) {
		Tutors.find(function  (err, tutors) {
			if(err) logger.info('Error: ' + err)
			else callback(tutors)
		})
	}

	function findIdTutor (_id, callback){
		Tutors.findById(_id, function(err, tutor) {
	  		if (err) logger.error('Error' + err)
	  		else callback(tutor)
	  	})
	}

	function updateTutor (req, callback){
		Tutors.findById(req.params.id, function (err, tutor){

			tutor.tutorName 				= req.body.tutorName
			tutor.tutorLastName 			= req.body.tutorLastName
			tutor.tutorEmail 				= req.body.tutorEmail
			tutor.tutorCareer	 			= req.body.tutorCareer
			tutor.tutorRol 					= req.body.tutorRol
			tutor.tutorPassword	 			= req.body.tutorPassword
			tutor.tutorCod					= req.body.tutorCod
			tutor.tutorPhone   				= req.body.tutorPhone
			tutor.tutorCellPhone			= req.body.tutorCellPhone
			tutor.tutorCantStudents			= req.body.tutorCantStudents
			tutor.tutorIdent				= req.body.tutorIdent

			tutor.save(function (err){
				if (err) logger.error('Error: ' + err)
				else callback(tutor)
			})

		})
	}

	function createTutor (req, callback){

		var tutor = new Tutors({
			tutorName 			: req.body.tutorName,
			tutorLastName 		: req.body.tutorLastName,
			tutorEmail 			: req.body.tutorEmail,
			tutorCareer	 		: req.body.tutorCareer,
			tutorRol 			: req.body.tutorRol,
			tutorPassword	 	: req.body.tutorPassword,
			tutorCod			: req.body.tutorCod,
			tutorPhone   		: req.body.tutorPhone,
			tutorCellPhone		: req.body.tutorCellPhone,
			tutorCantStudents	: req.body.tutorCantStudents,
			tutorIdent			: req.body.tutorIdent
		})

		tutor.save(function (err){
			if (err) logger.error('Error: ' + err)
			else callback(tutor)
		})

	}

	function deleteTutor (req, callback){
		Tutors.findById(req.params.id, function (err, tutor){
			tutor.remove(function (err){
				if (err) logger.error('Error: ' + err)
				else callback(tutor)
					//logger.info('Tutor '  + req.params.id + ' was removed')
			})
		})
	}

	return{
		findAllTutors 	: findAllTutors,
		findIdTutor		: findIdTutor,
		updateTutor		: updateTutor,
		createTutor		: createTutor,
		deleteTutor		: deleteTutor
	}

}