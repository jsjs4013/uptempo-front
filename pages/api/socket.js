import { Server, io } from 'Socket.IO';

const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log('Socket is already running');
    } else {
        console.log('Socket is initializing');
        const io2 = new Server(res.socket.server);
        res.socket.server.io = io;

        const socketHeader = {
            'Access-Control-Allow-Origin': true
        };


        socket2 = io('ws://61.74.187.4:7410', socketHeader);
        socket.open((msg) => {console.log(msg)});
        console.log('hi');

        // io.on('connection', socket => {
        //     socket.on('input-change', msg => {
        //         socket.broadcast.emit('update-input', msg)
        //     });
        // });
    }
    res.end();
}

export default SocketHandler