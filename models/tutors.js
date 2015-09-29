var mongoose = require('mongoose')
var Schema = mongoose.Schema

var tutorSchema = new Schema({
	tutorName 			: { type : String},
	tutorLastName 		: { type : String},
	tutorEmail 			: { type : String, match: [/.+\@.+\..+/, "Please fill a valid email address"]},
	tutorCareer	 		: { type : String},
	tutorRol 			: { type : String},
	tutorPassword	 	: { type : String},
	tutorCod			: { type : Number},
	tutorPhone   		: { type : Number},
	tutorCellPhone		: { type : Number},
	tutorCantStudents	: { type : Number},
	createdAt			: { type : Date, default : Date.now}  
})

module.exports = mongoose.model('Tutors', tutorSchema)