var express = require('express');
var router = express.Router();
var login = 'sasha';
var password = '123';

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query.login === login)
  var respString = ''
  
if (req.query.login === login  && req.query.password === password ){
  respString = 'Welcome';
}if(req.query.password !== password){
  respString += '\nInvalid password'
}
if(req.query.login !== login ){
  respString += '\nInvalid login';
}

res.send(respString);
});

module.exports = router;
