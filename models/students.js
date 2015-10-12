var mongoose = require('mongoose')
var Schema = mongoose.Schema

var studentSchema = new Schema({
	studentName 		: { type : String},
	studentLastName 	: { type : String},
	studentEmail 		: { type : String, match: [/.+\@.+\..+/, "Please fill a valid email address"]},
	studentCareer	 	: { type : String},
	studentRol 			: { type : String},
	studentPassword 	: { type : String},
	studentTutor		: { type : Schema.Types.ObjectId, ref: 'Tutors' },
	studentPeriod		: { type : String},
	studentPhone		: { type : Number},
	studentCellPhone	: { type : Number},
	studentCreditsAc	: { type : Number},
	studentCod			: { type : Number},
	studentIdent		: { type : Number},  
	createdAt			: { type : Date, default : Date.now}  
})

module.exports = mongoose.model('Students', studentSchema)
