const mongoose = require('mongoose');
const link=require('../controllers/connect');
const connectionLink=link.URI;

mongoose.connect(connectionLink,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => {
        console.log('Connexion à MongoDB échouée !')
    });


module.export = mongoose.connect;