const express=require('express');
const forDb=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');          
const jwt = require('jsonwebtoken');
const multer = require('multer');


const app=express();
const path = require('path');

forDb.connect('mongodb + srv://P1qu4nt3_MNG:M4n4g1nGC0D3F0RTh1s0n3@cluster0.yepbw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.log('Connexion à MongoDB échouée ! ' + error.message)); //-> penser à mettre:+error.message en cas de problème

    /*test connection DB*/

    const testSauce=({
    title: sauce,
    description:'ketchup léger',
    imageUrl:'../imageDeTest/ketchup.png',
    userId: 'a1234',
    price: 1400,
});

app.use=(res,rep,next) => {
    
};