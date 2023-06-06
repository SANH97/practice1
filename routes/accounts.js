var express = require('express');
var router = express.Router();


router.get('/join', function(req, res){
    res.render('accounts/join');
});


router.get('/login', function(req, res){
    res.render('accounts/login');
});



module.exports = router;