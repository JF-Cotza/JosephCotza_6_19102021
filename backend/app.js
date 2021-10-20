//ajout des modules
const express=require('express');
const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');          
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

//création de app, "l'application du backend"
const app=express();

// construction des routes
/*
const test= require('./routes/route');
test.toto;
*/
app.use((req, res) => {
    app.use('/api/stuff', (req, res, next) => {
        const stuff = [
            {
                _id: 'oeihfzeoi',
                title: 'Mon premier objet',
                description: 'Les infos de mon premier objet',
                imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
                price: 4900,
                userId: 'qsomihvqios',
            },
            {
                _id: 'oeihfzeomoihi',
                title: 'Mon deuxième objet',
                description: 'Les infos de mon deuxième objet',
                imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',

                price: 2900,
                userId: 'qsomihvqios',
            },
        ];
        res.status(200).json(stuff);
    });
});



/*
forDb.connect('mongodb + srv://P1qu4nt3_MNG:M4n4g1nGC0D3F0RTh1s0n3@cluster0.yepbw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.log('Connexion à MongoDB échouée ! ' + error.message)); //-> penser à mettre:+error.message en cas de problème
*/
    /*test connection DB*/
/*
    const testSauce=({
    title: 'sauce',
    description:'ketchup léger',
    imageUrl:'../imageDeTest/ketchup.png',
    userId: 'a1234',
    price: 1400,
});

app.use=(res,rep,next) => {
    
};
*/

module.exports =app; //sert à renvoyer les infos vers le frontend


