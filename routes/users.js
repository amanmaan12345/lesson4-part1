var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  var users = ['baisen', 'keith','jamie',]
  res.render ('users', {title: 'users', users: users});
});

module.exports = router;
