var express = require('express');
var path = require('path');


var home = require('./routes/home');
var accounts = require('./routes/accounts');
var chat = require('./routes/chat');
var products = require('./routes/products');
var cart = require('./routes/cart');

var app = express();

var port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',home);
app.use( '/accounts', accounts );
app.use( '/chat', chat );
app.use('/products', products);
app.use('/cart', cart);
app.use('/uploads', express.static('uploads'));

var server = app.listen( port, function(){
    console.log('Express listening on port', port);
});

var listen =require('socket.io');
var io = listen(server);

io.use(function(socket,next){
  sessionMiddleWare(socket.request, socket.request.res, next);
});
require('./libs/socketConnection')(io);