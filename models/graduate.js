var mongoose = require('mongoose')
var Schema = mongoose.Schema

var graduates = new Schema({
	Cid : {},
	Names : {},
	LastNames : {},
	Genere : {},
	Bird : {},
	Country : {},
	Address : {},
	Email : {},
	Email_2 : {},
	Phone : {},
	CellPhone : {},
	DateStartCarrear : {},
	DateFinshCarrear : {},
	DateInFIM : {},
	Tesis : {}
})

module.exports = mongoose.model('Graduates', graduates)
//mongoimport -d mydb -c egresados --type csv --file w.csv --headerline