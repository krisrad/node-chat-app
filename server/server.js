const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('new user connected');
    
    socket.on('disconnect', ()=>{
        console.log('client disconnected');
    });

    socket.on('createMessage', (msg)=>{
        console.log('message received...', msg);     
        io.emit('newMessage', {
            from: msg.from,
            text: msg.text,
            createdAt: new Date().getTime()
        });     
    });

});

server.listen(port, ()=>{
    console.log(`server is up on port ${port}`);
})