var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
	Name 		: { type : String},
	Password 	: { type : String},
	Rol			: { type : String, enum : ['admin' , 'user'], default: 'user'},
	Email 		: { type : String, match: [/.+\@.+\..+/, "Please fill a valid email address"]},
	Status		: { type : Boolean, default : true},
	createdAt       : { type : Date, default : Date.now}
})

module.exports = mongoose.model('Users', userSchema)