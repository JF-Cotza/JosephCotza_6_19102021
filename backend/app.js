//ajout des modules
const express=require('express');

//création des routes/
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');
const connectRoutes = require('./routes/connect');


connectRoutes;
//création de app, "l'application du backend"
const app=express();

// pour éviter les erreurs cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/api/sauce', sauceRoutes); // on appelle stuffRoutes comme 'fonction' de app. 
app.use('/api/auth', userRoutes);

/*générique : export des datas*/
module.exports = app;


/* élément vus en cours non utilisés :
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));  //le répertoire est fixe => on utilise static pour pouvoir l'utilser
delete req.body._id // pour supprimer un id présent dans la req 
*/