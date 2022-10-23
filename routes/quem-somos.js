var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/quem-somos', function(req, res, next) {
  res.render('quem-somos');
});

module.exports = router;
