var mongoose = require('mongoose')
var Schema = mongoose.Schema

var tutorSchema = new Schema({
	Name 			: { type : String, required : true},
	LastName 		: { type : String},
	Email 			: { type : String, required : true, index: { unique: true }, match: [/.+\@.+\..+/, "Please fill a valid email address"]},
	Career	 		: { type : String, default : 'mecanica'},
	Rol 			: { type : String, default : 'tutor'},
	Dep				: { type : String, required : true, enum : ['materiales' , 'mecanica'], default : 'mecanica'},
	Password	 	: { type : String},
	Cod				: { type : Number},
	Phone   		: { type : Number},
	CellPhone		: { type : Number},
	CantStudents	: { type : Number},
	Ident			: { type : Number, required : true}, 
	Status			: { type : Boolean, default : true},
	createdAt		: { type : Date, default : Date.now}  
})

module.exports = mongoose.model('Tutors', tutorSchema)