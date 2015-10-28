var express = require('express');
var router = express.Router();

createForm = function(req, res){
	console.log(req.body)
}

router.post('/sendForm', createForm)

module.exports = router;