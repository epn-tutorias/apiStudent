var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'APP gestion de Tutorias EPN FIM' });
});

module.exports = router;
