var mongoose = require('mongoose')
var Schema = mongoose.Schema

var tutorSchema = new Schema({
	tutorName 			: { type : String},
	tutorLastName 		: { type : String},
	tutorEmail 			: { type : String},
	tutorCareer	 		: { type : String},
	tutorRol 			: { type : String},
	tutorPassword	 	: { type : String},
	tutorTutor			: { type : String},
	tutorPeriod			: { type : String},
	tutorCreditsAc		: { type : Number},
	tutorCod			: { type : Number},  
	provider 			: { type : String},
	provider_id 		: { type : String, unique : true},
	photo				: { type : String},
	createdAt			: { type : Date, default : Date.now}  
})

module.exports = mongoose.model('Tutors', tutorSchema)