// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(index);
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    console.log(req, res);
    res.sendFile(path.join(__dirname + '/camera.html'));
});

app.listen(8080);