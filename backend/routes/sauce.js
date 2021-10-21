
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
//ce fichier correpond à /api/sauces suite à la création de la route

/*
pour les sauces
// création
    //app.post('/api/sauces', (req, res, next)) =>
app.post('/', (req, res, next))
    entrée / body req: { sauce: String, image: File }
    fonction:  Capture et enregistre l'image, 
                        Analyse la sauce transformée en chaîne de caractères et l'enregistre dans la base de données en
                        définissant correctement son imageUrl. 
                        Initialise les likes et dislikes de la sauce à 0 et les usersLiked et usersDisliked avec des tableaux vides. 
                        Remarquez que le corps de la demande initiale est vide; lorsque multer est ajouté, il renvoieune chaîne pour 
                        le corps de la demande en fonction des données soumises avec le fichier.
    sortie / res : { message: String } Verb

// lecture
    //app.get('/api/sauces', (req, res, next)) =>
app.get('/', (req, res, next))
    sortie / res : toutes les sauces
    app.get('/api/sauces/:id', (req, res, next))
    sortie / res : la sauce correspondant à id
// modification
    //app.put('/api/sauces/:id', (req, res, next))=>
app.put('/:id', (req, res, next))
    entrée / body req:d EITHER Sauce as JSON OR { sauce: String, image: File }
    fonction:  Met à jour la sauce avec l'_id fourni. Si une image est téléchargée, elle est capturée et l’imageUrl de la
                        sauce est mise à jour. 
                        Si aucun fichier n'est fourni, les informations sur la sauce se trouvent directement dans le corps de la requête
    (req.body.name, req.body.heat, etc.). 
                        Si un fichier est fourni, la saucetransformée en chaîne de caractères se trouve dans req.body.sauce.Notez que
                        le corps de la demande initiale est vide; lorsque multer est ajouté, il renvoie une chaîne du corps de la
                        demande basée sur les données soumises avec le fichier
    sortie / res : { message: String }
// suppression
    //app.delete('/api/sauces/:id', (req, res, next)) => 
app.delete('/:id', (req, res, next))
    fonction:      Supprime la sauce avec l'_idfourni.
    sortie / res : { message: String }
// like
    //app.post('/api/sauces/:id/like', (req, res, next))=>
app.post('/:id/like', (req, res, next))
    entrée / body req: { userId: String, like: Number }
    fonction:      Définit le statut « Like » pour l' userId fourni. 
                        Si like = 1, l'utilisateur aime (= like) la sauce. 
                        Si like = 0, l'utilisateur annule son like ou son dislike. 
                        Si like = -1, l'utilisateur n'aime pas(= dislike) la sauce.
    L'ID de l'utilisateur doit être ajouté ou retiré du tableau approprié.Cela permet de garder une trace de leurs
                        préférences et les empêche de liker ou de ne pas disliker la même sauce plusieursfois: 
                            un utilisateur ne peut avoir qu'une seule valeur pour chaque sauce. 
                        Le nombre total de « Like » et de « Dislike » est mis à jour à chaque nouvelle notation.
    sortie / res : { message: String }

*/