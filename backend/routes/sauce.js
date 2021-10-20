
//structure de base bour les futures routes
const express = require('express');
const router = express.Router();
const mongoose=require('mongoose')

/* spécifique*/
const Sauce = require('../models/sauce');

//structure de base bour les futures routes
//on autorise les origines croisées càd, port frontend et backend différent
/*router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const userDb = 'P1qu4nt3_MNG';
const pswordDb = 'M4n4g1nGC0D3F0RTh1s0n3';
const linkDb = 'cluster0.yepbw.mongodb.net';
const nameDb = 'piiq_db';

const data = () => [userDb, pswordDb, linkDb, nameDb];

//connexion à la DB
mongoose.connect(`mongodb+srv://${data[0]}:${data[1]}@${data[2]}/${data[3]}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => {
        console.log('Connexion à MongoDB échouée !'),
            console.log(error.message)
    });
*/

module.exports = router;
