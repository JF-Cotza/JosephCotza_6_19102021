const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); //on a besoin du module mongoose-unique-validator

const userSchema = mongoose.Schema({                            //on crée le modèle
    email: { type: String, required: true, unique: true },        //unique => empêche en théorie le multi enregistrement avec le même mail
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);                                 //uniqueValidator renforce la sécurité et évite des bugs

module.exports = mongoose.model('User', userSchema);            //on l'exporte

/* les infos du projet
Utilisateur
● email : String — adresse e-mail de l'utilisateur [unique]
● password : String — mot de passe de l'utilisateur haché
*/