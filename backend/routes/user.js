//structure de base bour les futures routes
const express = require('express');
const router = express.Router();
const mongoose=require('mongoose')

/* spécifique*/
const User=require('../models/user');

//structure de base bour les futures routes
//on autorise les origines croisées càd, port frontend et backend différent
/*
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//connexion à la DB
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

//ce fichier-ci correspond à /api/auth suite à la création de la route
/* à partir des spécifications
pour les user
    // enregistrement/création
        app.post('/api/auth/signup',(req,res,next)) => app.post('/signup',(req,res,next))
            entrée / body req : { email: string, password: string }
            fonction : Hachage du mot de passe de l'utilisateur, ajout del'utilisateur à la base dedonnées.
            sortie / res : { message: string }
    // connexion
        app.post('/api/auth/login',(req, res,next) => app.post('/login',(req, res,next)
            entrée / body req : { email: string, password: string }
            fonction :  Vérification desinformations d'identification de l'utilisateur,
                        renvoie l _id de l'utilisateur depuis la base de données et un token web JSON signé
                        (contenant également l'_idde l'utilisateur).
            sortie /res :{ userId: string, token: string }
*/

