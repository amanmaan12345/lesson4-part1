var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 4',
  message : 'This is a message'});
});
// get request for the random page
router.get('/random',function(req, res, next)
{
  var randomNumber = Math.random();

  //load the random view
  res.render('random',{title: 'RandomNumber', randomNumber: randomNumber});
});
module.exports = router;
