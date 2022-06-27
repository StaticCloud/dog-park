const express = require('express');
const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

app.use(express.static('public'))

io.on('connection', (socket) => {
    console.log(`${socket.id} connected!`);
})

server.listen(3000)