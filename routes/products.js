var express = require('express');
var router = express.Router();

router.get('/:id' , function(req, res){

   
        res.render('products/detail', { product: result.product , comments : result.comments });
    
});

module.exports = router;