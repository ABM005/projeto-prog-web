var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pets', function(req, res, next) {
  res.render('pets');
});

module.exports = router;
