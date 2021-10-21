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

/*générique : export des datas*/
module.exports = app;


