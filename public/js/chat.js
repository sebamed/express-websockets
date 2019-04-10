var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

/**
 * Listens for btn click and emits 'chat' event via socket
 */
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = '';
});

socket.on('chat', (data) => {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})