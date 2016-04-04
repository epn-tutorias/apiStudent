var Graduates = require('../models/graduate')

module.exports = function(){
	createGraduate = function(req, callback){
		var graduate = new Graduates({
			Cid : req.body.Cid,
			Names : req.body.Names,
			LastNames : req.body.LastNames,
			Genere : req.body.Genere,
			Bird : req.body.Bird,
			Country : req.body.Country,
			Address : req.body.Address,
			Email : req.body.Email,
			Email_2 : req.body.Email_2,
			Phone : req.body.Phone,
			CellPhone : req.body.CellPhone,
			DateStartCarrear : req.body.DateStartCarrear,
			DateFinshCarrear : req.body.DateFinshCarrear,
			DateInFIM : req.body.DateInFIM,
			Tesis : req.body.Tesis
		})

		graduate.save(function(err){
			if (err) callback(err)
			else callback(null,graduate)
		})
	}
	findGraduate = function(req, callback){
		console.log(req.params.id)
		Graduates.findById(req.params.id, function(err, graduate){
			if (err) callback(err)
			else callback(null,graduate)
		})
	}
	findAllGraduates = function(callback){
		Graduates.find(function(err, graduates){
			if (err) callback(err)
			else callback(null,graduates)
		})
	}
	deleteGraduate = function(req, callback){
		Graduates.findById(req.params.id, function(err, graduate){
			graduate.remove(function(err){
				if (err) callback(err)
				else callback(null,graduate)
			})
		})
	}
	updateGraduate = function(req, callback){
		Graduates.findById(req.params.id, function(err, graduate){
			graduate.Cid 				= req.body.Cid
			graduate.Names 				= req.body.Names
			graduate.LastNames 			= req.body.LastNames
			graduate.Genere 			= req.body.Genere
			graduate.Bird 				= req.body.Bird
			graduate.Country 			= req.body.Country
			graduate.Address 			= req.body.Address
			graduate.Email 				= req.body.Email
			graduate.Email_2 			= req.body.Email_2
			graduate.Phone 				= req.body.Phone
			graduate.CellPhone 			= req.body.CellPhone
			graduate.DateStartCarrear 	= req.body.DateStartCarrear
			graduate.DateFinshCarrear 	= req.body.DateFinshCarrear
			graduate.DateInFIM 			= req.body.DateInFIM
			graduate.Tesis 				= req.body.Tesis

			graduate.save(function(err){
				if (err) callback(err)
				else callback(graduate)
			})
		})
	}

	return{
		createGraduate	: createGraduate,
		findGraduate	: 	findGraduate,
		findAllGraduates	: 	findAllGraduates,
		deleteGraduate	: 	deleteGraduate,
		updateGraduate	: 	updateGraduate
	}
}