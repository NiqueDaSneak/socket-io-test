'use strict'

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, function(){
  console.log('Server listening');
});

app.on('error', function(){
	console.log(error);
});

//MIDDLEWARE
app.set('views', './views');
app.set('view engine', 'jade');

//ROUTES
app.get('/', function(req,res,next){
  res.render('index');
});

//SOCKET
io.on('connection', function(socket){
  socket.emit('test');
  socket.on('addRed', function(){
    redTotal += 1
    socket.emit('updateRed', {total: redTotal});
    console.log('sending data to client, no refresh!')
  });
});

//TEST LOGIC FOR ADDING
var redTotal = 0;



module.exports = app;
