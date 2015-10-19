var express =  require('express')
var router = express.Router()
var Notes = require('../helper/noteHelper')
var notedb = Notes()

findAllNote = function (req, res) {
	notedb.findAllNotes(function (err, notes) {
		res.send(notes)
	})
}

createNote = function (req, res) {
	notedb.createNote(req, function (err, note){
		if(err) res.send(err)
		else res.send('Note was create ' + note)
	})
}

findIdNotes = function (req, res) {
	notedb.findIdNote(req.params.id, function (err, note){
		if(err) res.send(err)
		else res.send(note)
	})
}

updateNotes = function (req, res){
	notedb.updateNote(req, function (err, note){
		if(err) res.send(err)
		else res.send(note)
	})
}

deleteNotes = function (req, res){
	notedb.deleteNote(req, function (err, note){
		if(err) res.send(err)
		else res.redirect('../../listNotes')
	})
}

router.post('/note', createNote)

router.get('/notes', findAllNote)

router.get('/notes/:id', findIdNotes)

router.put('/notes/:id', updateNotes)

router.delete('/notes/:id', deleteNotes)

router.get('/delete/:id', deleteNotes)

module.exports = router