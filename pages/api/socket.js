import { Server } from 'Socket.IO';
import { io } from 'socket.io-client';

const SocketHandler = async (req, res) => {
    const socketHeader = {
        'Access-Control-Allow-Origin': true
    };

    if (res.socket.server.io) {
        console.log('Socket is already running');
    } else {
        console.log('Socket is initializing');

        //////////////////// Connection ////////////////////
        const socket_client = io('ws://61.74.187.4:7410', socketHeader);
        socket_client.on('connection', msg => {
            console.log(msg);
        });
        ////////////////////////////////////////////////////

        const io1 = new Server(res.socket.server);
        res.socket.server.io = io1;

        io1.on('connection', socket => {
            socket.on('input-change', msg => {
                console.log(msg);
            });
        });
    }
    res.end();
}

export default SocketHandler