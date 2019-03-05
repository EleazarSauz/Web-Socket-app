const  express = require('express');

const app = express();


// RUTAS
app.get('/', (req, res) => res.send('holi'));

// CONFIGRURACIÓN DEL PUERTO
app.set('port', process.env.PORT || 8888);  // determinar el puerto por defecto o selecionar el 8888
const port = app.get('port') // guardar en una costante

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto', port, ', enjoy! :D') // levantar el servidor
});
