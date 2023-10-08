import io from "socket.io-client";

const SOCKET_URL = `http://192.168.1.35:3025`;

const socket = io(SOCKET_URL, { transports: ['websocket'] });

socket.on('connect', () => {
    console.log('⚡️[socket] Connected to server');
});

socket.on('disconnect', () => {
    console.log('⚡️[socket] Disconnected from server');
});


export default socket;