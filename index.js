const  express = require('express');
const SocketIO = require('socket.io');

const app = express();


// RUTAS
app.get('/', (req, res) => res.send('holi :)'));
app.get('/chat', (req, res) => res.sendFile(__dirname + '/chat.html') );
    
// CONFIGRURACIÓN DEL PUERTO
app.set('port', process.env.PORT || 8888);  // determinar el puerto por defecto o selecionar el 8888
const port = app.get('port') // guardar en una costante

const server = app.listen(port, () => {   // levantar el servidor y guardar en una constante
    console.log('Servidor corriendo en el puerto', port, ', enjoy! :D') 
});

app.use(express.static)

// WEBSOCKETS
const io = SocketIO(server);

io.on('connection', function (socket) {
    console.log('Un usuario se conecto :o');
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});
