var Notes = require('../models/notes')
 
module.exports = function(){

	function findAllNotes (callback){
		Notes.find(function (err, notes){
			if(err) callback(err)
			else callback (null, notes)
		})
	}

	function findIdNote (_id, callback){
		Notes.findById(_id, function (err, note) {
			if (err) callback(err)
			else callback(null, note)
		})
	}

	function findNoteByStudent (_id, callback){
		Notes.find()
			.where('student_id').equals(_id)
			.exec(getStudentNotes)

			function getStudentNotes (err, notes){
				if(err) callback(err)
				else callback(null, notes)	
			}
	}

	function findNoteByTutor (_id, callback){

	}

	function updateNote (req, callback){
		Notes.findById(req.params.id, function (err, note){
			note.title 			= req.body.title 
			note.note 			= req.body.note 
			note.student_id		= req.body.student_id
			note.tutor_id 		= req.session.name 

			user.save(function (err){
				if(err) callback(err)
				else callback(null, note)
			})
		})
	}

	function createNote (req, callback){
		var note = new Notes({
			title			: req.body.title,
			note 			: req.body.note,
			student_id 		: req.body.student_id,
			tutor_id		: req.session.name 
		})

		note.save(function (err){
			if (err) callback(err)
			else callback(null, note)
		})
	}

	function deleteNote (req, callback){
		Notes.findById(req.params.id, function (err, note){
			note.remove(function (err){
				if (err) callback(err)
				else callback(null, note)
			})
		})
	}


	return {
		findAllNotes 	: findAllNotes,
		findIdNote 		: findIdNote,
		findNoteByStudent :findNoteByStudent,
		findNoteByTutor :findNoteByTutor,
		updateNote		: updateNote,
		createNote		: createNote,
		deleteNote		: deleteNote
	}
}