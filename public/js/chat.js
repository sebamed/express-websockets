var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

/**
 * Listens for btn click and emits 'chat' event via socket
 */
btn.addEventListener('click', () => {
    /**
     * Emitting chat event
     */
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = '';
});

/**
 * Listens for message typing
 */
message.addEventListener('keypress', () => {
    /**
     * Emitting typing event
     */
    socket.emit('typing', {
        handle: handle.value
    });
})

/**
 * Listens for chat event emitted by server
 */
socket.on('chat', (data) => {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})

/**
 * Listes for typing event emitted by server
 */
socket.on('typing', (data) => {
    feedback.innerHTML = `<p>` + data.handle + ' is typing...</p>';
})
