var socket = io();

socket.on('connect', function() {
    console.log('connected to server..');    
    socket.emit('createMessage', {
        from: 'rk',
        text: 'Hi from RK'
    })
});

socket.on('disconnect', function() {
    console.log('disconnected from server..');
});

socket.on('newMessage', function(msg) {
    console.log('Message received', msg);
});



