var express = require('express');
var socket = require('socket.io');

// Application setup
var app = express();
var server = app.listen(4000, () => {
    console.log('Listening port 4000')
});

// Serve static files
app.use(express.static('public'));

// Socket.IO setup
var io = socket(server);
io.on('connection', (socket) => {
    console.log(`Connection established: ${socket.id}`);

    socket.on('chat', (message) => {
        console.log(message);
        io.sockets.emit('chat', message);
    })
});