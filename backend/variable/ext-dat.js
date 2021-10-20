
const mongoose = require('mongoose');

//connexion à la DB
const userDb = 'P1qu4nt3_MNG';
const pswordDb = 'M4n4g1nGC0D3F0RTh1s0n3';
const linkDb = 'cluster0.yepbw.mongodb.net';
const nameDb = 'piiq_db';
const link = 'mongodb+srv://' + userDb + ':' + pswordDb + '@' + linkDb + '/' + nameDb + '?retryWrites=true&w=majority';

//connexion à la DB
mongoose.connect(link,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => {
        console.log('Connexion à MongoDB échouée !'),
            console.log(error.message)
    });


module.export=mongoose.connect;


