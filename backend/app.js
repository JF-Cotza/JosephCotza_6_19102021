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

//création des routes/
/*
const user=require('./routes/user');
const sauce=require('./routes/sauce')
*/

//structure de base bour les futures routes
//on autorise les origines croisées càd, port frontend et backend différent
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


   
    





module.exports =app; //sert à renvoyer les infos vers le frontend


