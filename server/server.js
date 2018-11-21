const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var utils = require('./utils/message');

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('new user connected');

    socket.emit('newMessage', utils.generateMessage('Admin', 'Welcome to chat app'));

    socket.broadcast.emit('newMessage', utils.generateMessage('Admin', 'New user joined'));
    
    socket.on('createMessage', (msg)=>{
        io.emit('newMessage', utils.generateMessage(msg.from, msg.text));  
        // socket.broadcast.emit('newMessage', utils.generateMessage(msg.from, msg.text));
    });

    socket.on('disconnect', ()=>{
        console.log('client disconnected');
    });

});

server.listen(port, ()=>{
    console.log(`server is up on port ${port}`);
})