
const mongoose = require('mongoose');
const link=require('../controllers/connect');
const connectionLink=link.URI;









mongoose.connect(link, //JSON.stringify(link.link),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => {
        console.log('Connexion à MongoDB échouée !'),
            console.log(error.message)
    });


module.export = mongoose.connect;