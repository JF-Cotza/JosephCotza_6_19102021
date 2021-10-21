//ajout des modules
const express=require('express');


//création de app, "l'application du backend"
const app=express();

//création des routes/
const userRoutes=require('./routes/user');
const sauceRoutes=require('./routes/sauce');

const connect=require('./routes/connect');

app.use(express.json());

app.use('/api/sauce', sauceRoutes); // on appelle stuffRoutes comme 'fonction' de app. 
app.use('/api/auth', userRoutes);

/*générique : export des datas*/
module.exports = app;


/* élément vus en cours non utilisés :
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));  //le répertoire est fixe => on utilise static pour pouvoir l'utilser

*/