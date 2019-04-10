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

/**
 * Listening for a connection from client
 */
io.on('connection', (socket) => {
    console.log(`Connection established: ${socket.id}`);

    /**
     * Listening for chat event from clients
     */
    socket.on('chat', (message) => {
        io.sockets.emit('chat', message);
    })

    /**
     * Listening for typing event from clients
     */
    socket.on('typing', (typer) => {
        socket.broadcast.emit('typing', typer);
    })
});