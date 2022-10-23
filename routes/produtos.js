var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/produtos', function(req, res, next) {
  res.render('produtos');
});

module.exports = router;
