var Users = require('../models/users')

module.exports = function(){

	function findAllUsers (callback){
		Users.find(function (err, users){
			if(err) callback(err)
			else callback (null, users)
		})
	}

	function findIdUser (_id, callback){
		Users.findById(_id, function (err, user) {
			if (err) callback(err)
			else callback(null, user)
		})
	}

	function updateUser (req, callback){
		Users.findById(req.params.id, function (err, user){
			user.userName 		= req.body.userName 
			user.userPassword 	= req.body.userPassword 
			user.userRol		= req.body.userRol
			user.userEmail 		= req.body.userEmail 

			user.save(function (err){
				if(err) callback(err)
				else callback(null, user)
			})
		})
	}

	function createUser (req, callback){
		var user = new Users({
			userName		: req.body.userName,
			userPassword 	: req.body.userPassword,
			userEmail 		: req.body.userEmail 
		})

		user.save(function (err){
			if (err) callback(err)
			else callback(null, user)
		})
	}

	function deleteUser (req, callback){
		Users.findById(req.params.id, function (err, user){
			user.remove(function (err){
				if (err) callback(err)
				else callback(null, user)
			})
		})
	}

	autheUser = function(userEmail, userPass, callback) {
		Users.find()
				.where('userEmail').equals(userEmail)
				.where('userPassword').equals(userPass)
				.exec(getUser)

				function getUser (err, user){
					if(err) callback(err)
					else callback(null, user)	
				}
	}

	return {
		findAllUsers 	: findAllUsers,
		findIdUser 		: findIdUser,
		updateUser		: updateUser,
		createUser		: createUser,
		deleteUser		: deleteUser,
		autheUser		: autheUser
	}
}