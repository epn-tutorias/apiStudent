var nodemailer = require('nodemailer')

module.exports = function(){

	var smtpTransport =  nodemailer.createTransport({
		service : 'Gmail',
		auth : {
			user : 'mauricio.duque.eje@gmail.com',
			pass : 'Theverve01'
		}
	})

	var mailContent = '<strong>Hola</strong>'

	var mailOptions = {
		from : 'Mauricio Duque',
		to : 'domotique.eje@gmail.com',
		subject : 'Sin Asunto',
		text : 'Hola como estas',
		html : mailContent
	}

	function sendMail (callback){
		smtpTransport.sendMail(mailOptions, function (err, response) {
			if(err) callback(err)
			else callback(null, response)
		})
	}
	return {
		sendMail : sendMail
	}
}
