var mongoose = require('mongoose')
var Schema = mongoose.Schema

var notesSchema = new Schema({
	title			: { type : String},
	note  			: { type : String},
	student_id		: { type : String},
	tutor_id  		: { type : String},
	createdAt       : { type : Date, default : Date.now}
})

module.exports = mongoose.model('Notes', notesSchema)