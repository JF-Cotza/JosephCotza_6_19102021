//ajout des modules
const express=require('express');
const mongoose=require('mongoose');

const bcrypt = require('bcrypt');          
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

//création de app, "l'application du backend"
const app=express();

//création des routes/
const userRoutes=require('./routes/user');
const sauceRoutes=require('./routes/sauce');

const connect=require('./variable/ext-dat');

//test
//pour éviter les CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());



app.use('/api/sauce', sauceRoutes); // on appelle stuffRoutes comme 'fonction' de app. 
app.use('/api/auth', userRoutes);
/*
app.use('/images', express.static(path.join(__dirname, 'images')));  //le répertoire est fixe => on utilise static pour pouvoir l'utilser 
*/


/* à partir des spécifications
pour les user
    // enregistrement/création
        app.post('/api/auth/signup',(req,res,next))
            entrée / body req : { email: string, password: string }
            fonction : Hachage du mot de passe de l'utilisateur, ajout del'utilisateur à la base dedonnées.
            sortie / res : { message: string }
    // connexion
        app.post('/api/auth/login',(req, res,next)
            entrée / body req : { email: string, password: string }
            fonction :  Vérification desinformations d'identification de l'utilisateur,
                        renvoie l _id de l'utilisateur depuis la base de données et un token web JSON signé
                        (contenant également l'_idde l'utilisateur).
            sortie /res :{ userId: string, token: string }

pour les sauces
    // création
        app.post('/api/sauces',(req,res,next))
            entrée / body req : { sauce: String, image: File }
            fonction :  Capture et enregistre l'image, 
                        Analyse la sauce transformée en chaîne de caractères et l'enregistre dans la base de données en
                        définissant correctement son imageUrl. 
                        Initialise les likes et dislikes de la sauce à 0 et les usersLiked et usersDisliked avec des tableaux vides. 
                        Remarquez que le corps de la demande initiale est vide ; lorsque multer est ajouté, il renvoieune chaîne pour 
                        le corps de la demande en fonction des données soumises avec le fichier.
            sortie /res : { message: String } Verb
        
    // lecture
        app.get('/api/sauces',(req,res,next))
            sortie /res : toutes les sauces
        app.get('/api/sauces/:id',(req,res,next))
            sortie /res : la sauce correspondant à id
    // modification
        app.put('/api/sauces/:id',(req,res,next))
            entrée / body req :d EITHER Sauce as JSON OR { sauce: String, image: File }
            fonction :  Met à jour la sauce avec l'_id fourni. Si une image est téléchargée, elle est capturée et l’imageUrl de la
                        sauce est mise à jour. 
                        Si aucun fichier n'est fourni, les informations sur la sauce se trouvent directement dans le corps de la requête
                        (req.body.name, req.body.heat, etc.). 
                        Si un fichier est fourni, la saucetransformée en chaîne de caractères se trouve dans req.body.sauce. Notez que
                        le corps de la demande initiale est vide ; lorsque multer est ajouté, il renvoie une chaîne du corps de la
                        demande basée sur les données soumises avec le fichier
            sortie /res : { message: String }
    // suppression
        app.delete('/api/sauces/:id',(req,res,next))
            fonction :      Supprime la sauce avec l'_idfourni.
            sortie /res :   { message: String }
    // like
        app.post('/api/sauces/:id/like',(req,res,next))
        entrée / body req : { userId: String, like: Number }
        fonction :      Définit le statut « Like » pour l' userId fourni. 
                        Si like = 1, l'utilisateur aime (= like) la sauce. 
                        Si like = 0, l'utilisateur annule son like ou son dislike. 
                        Si like = -1, l'utilisateur n'aime pas (= dislike) la sauce. 
                        L'ID de l'utilisateur doit être ajouté ou retiré du tableau approprié. Cela permet de garder une trace de leurs
                        préférences et les empêche de liker ou de ne pas disliker la même sauce plusieursfois : 
                            un utilisateur ne peut avoir qu'une seule valeur pour chaque sauce. 
                        Le nombre total de « Like » et de « Dislike » est mis à jour à chaque nouvelle notation.
        sortie /res : { message: String } 

/*générique : export des datas*/
module.exports = app;


