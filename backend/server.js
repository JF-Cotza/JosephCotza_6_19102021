const http = require('http');
const app = require('./app'); //on importe le contenu du fichier app

//fonction pour vérifier le port
const normalizePort = val => {
    const port = parseInt(val, 10);      //converti val en une valeur en utilisant la base 10 => 0xF renvoit 15, 3000 renvoit 3000, abc renvoit NaN (not a number)
    if (isNaN(port)) {                   //si le port n'est pas un nombre, on retourne la valeur
        return val;             
    }
    if (port >= 0) {                     //si la valeur port est positif ou nul on renvoit le port
        return port;
    }
    return false;                       // un port ne peut pas être négatif => on renvoit false
};

const port = normalizePort(process.env.PORT || '3000');     //on écoute le port 3000 s'il n'y a pas un autre défini par le système.

app.set('port', port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {                      //si le système n'arrive pas à écouter
        throw error;
    }

    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

//on crée le serveur
const server = http.createServer(app);

//on vérifie s'il y a une erreur à la connexion
server.on('error', errorHandler);


//on vérifie que l'écoute se fait bien. si tout se passe bien on doit avoir dans le terminal : listening on port 3000
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

server.listen(port);