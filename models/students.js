var mongoose = require('mongoose')
var Schema = mongoose.Schema

var studentSchema = new Schema({
	Name 		: { type : String, required : true},
	LastName 	: { type : String, required : true},
	Genere		: { type : String, enum : ['male' , 'female']},
	Email 		: { type : String, required : true, index: { unique: true }, match: [/.+\@.+\..+/, "Please fill a valid email address"]},
	Province	: { type : String},
	Career	 	: { type : String, enum : ['mecanica' , 'materiales' , 'mecatronica'], default : 'mecanica'},
	Rol 		: { type : String, enum: ['student' , 'graduate' , 'professional']},
	Password 	: { type : String, required : true},
	Tutor		: { type : Schema.Types.ObjectId, ref: 'Tutors' },
	Period		: { type : String},
	Phone		: { type : Number},
	CellPhone	: { type : Number},
	CreditsAc	: { type : Number},
	Cod			: { type : Number},
	Ident		: { type : Number, required : true},  
	Status		: { type : Boolean, default : true},
	createdAt	: { type : Date, default : Date.now}  
})

module.exports = mongoose.model('Students', studentSchema)
