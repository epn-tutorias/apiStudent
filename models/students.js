var mongoose = require('mongoose')
var Schema = mongoose.Schema

var studentSchema = new Schema({
	Name 		: { type : String, required : true},
	LastName 	: { type : String},
	Email 		: { type : String, required : true, index: { unique: true }, match: [/.+\@.+\..+/, "Please fill a valid email address"]},
	Career	 	: { type : String, default : 'mecanica'},
	Rol 		: { type : String, default : 'student'},
	Password 	: { type : String, required : true},
	Tutor		: { type : Schema.Types.ObjectId, ref: 'Tutors' },
	Period		: { type : String},
	Phone		: { type : Number},
	CellPhone	: { type : Number},
	CreditsAc	: { type : Number},
	Cod			: { type : Number},
	Ident		: { type : Number, required : true},  
	Status		: { type : Boolean, default : true},
	createdAt			: { type : Date, default : Date.now}  
})

module.exports = mongoose.model('Students', studentSchema)
