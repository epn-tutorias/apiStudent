var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
	userName 		: { type : String},
	userPassword 	: { type : String},
	userRol			: { type : String, enum : ['admin' , 'user']},
	userEmail 		: { type : String, match: [/.+\@.+\..+/, "Please fill a valid email address"]},
	createdAt       : { type : Date, default : Date.now}
})

module.exports = mongoose.model('Users', userSchema)