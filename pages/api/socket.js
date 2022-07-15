import { Server } from 'Socket.IO';
import { WebSocket } from 'ws';

const SocketHandler = async (req, res) => {
    const socketHeader = {
        'Access-Control-Allow-Origin': true
    };

    if (res.socket.server.io) {
        console.log('Socket is already running');
    } else {
        console.log('Socket is initializing');

        // const socketServer = res.socket.server;
        // const wss = new WebSocket.Server({ port: 3000 });
        // res.socket.server.wss = wss;

        //////////////////// Connection ////////////////////
        // wss.on('connection', ws => {
        //     ws.on('message', message => {
        //         console.log('received: %s', message)
        //     })
          
        //     ws.send('something')
        // })          
        ////////////////////////////////////////////////////

        const ws = new WebSocket('ws://61.74.187.4:7410');
        
        ws.on('open', function open() {
        });

        ws.onmessage = (() => {
            return function messageListener(message) {
                console.log(message.data);
            }
        })();

        // const io1 = new Server(res.socket.server);
        // res.socket.server.io = io1;

        // io1.on('connection', socket => {
        //     socket.on('input-change', msg => {
        //         console.log(msg);
        //     });
        // });
    }
    res.end();
}

export default SocketHandler