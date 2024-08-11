const { Server } = require('socket.io')
const express = require('express')
const http = require('http')


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: [process.env.FE_BASE_URL],
        methods: ['GET', 'POST']
    }
});
const usersOnline = {}
const getReceiverSocketId = (receiverId) => {
    return usersOnline[receiverId] || null; // get first user id and return its socket id
}
io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;
    if (userId != undefined || userId !== 'undefined') {
        const userName = socket.handshake.query.userName;
        console.log(`${userName} connected with ${userId}`);
        usersOnline[userId] = socket.id
        io.emit('usersOnline', Object.keys(usersOnline))

    }
    socket.on('disconnect', (socket) => {
        console.error(`User Disconnected`)
        delete usersOnline[userId]
        io.emit('usersOnline', Object.keys(usersOnline))
    })
})

module.exports = {
    app, io, server, getReceiverSocketId
}