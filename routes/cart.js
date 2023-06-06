var express = require('express');
var router = express.Router();

router.get('/' , function(req, res){
    
    var totalAmount = 0; //총결제금액
    var cartList = {}; //장바구니 리스트
    //쿠키가 있는지 확인해서 뷰로 넘겨준다
    
    res.render('cart/index', { cartList : cartList , totalAmount : totalAmount } );
});


module.exports = router;