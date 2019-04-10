var express = require('express');

// Application setup
var app = express();
var server = app.listen(4000, () => {
    console.log('Listening port 4000')
});

