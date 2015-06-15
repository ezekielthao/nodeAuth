var express = require('express');
var router = express.Router();

// Members Page
//ensureAuthenticated - a function that makes sure the user is logged in
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Members' });
});

function ensureAuthenticated(req,res,next){
	if(req.isAuthenticated()){
		//if user is allowed to access site then next means proceed to next piece of middleware
		return next();
	}
	res.redirect('/users/login');
}

module.exports = router;
