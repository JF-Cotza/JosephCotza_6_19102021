const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const sauceSchema = mongoose.Schema({   //on crée le modèle     / les infos du projet
    userId: { type: String, required: true},     // userId : String — l'identifiant MongoDB unique de l'utilisateur qui a créé la sauce
    name: { type: String, required: true, unique: true },       // name : String — nom de la sauce
    manufacturer: { type: String, required: true },             // manufacturer : String — fabricant de la sauce
    description: { type: String, required: true },              // description : String — description de la sauce
    mainPepper: { type: String, required: true },               // mainPepper : String — le principal ingrédient épicé de la sauce
    imageUrl: { type: String, required: true },                 // imageUrl: String — l'URL de l'image de la sauce téléchargée par l'utilisateur
    heat: { type: Number, required: true },                     // heat: Number — nombre entre 1 et 10 décrivant la sauce
    likes: { type: Number, required: false },                   // likes : Number — nombre d'utilisateurs qui aiment (= likent) la sauce
    dislikes: { type: Number, required: false },                // dislikes : Number — nombre d'utilisateurs qui n'aiment pas (= dislike) la sauce
    usersLiked: { type: [String], required: false},              // usersLiked: ["String <userId>"] — tableau des identifiants des utilisateurs qui ont aimé (= liked) la sauce
    usersDisliked: { type: [String], required: false }           // usersDisliked: ["String <userId>"] — tableau des identifiants des utilisateurs qui n'ont pas aimé (= disliked) la sauce
});


sauceSchema.plugin(uniqueValidator);                              //uniqueValidator renforce la sécurité et évite des bugs
module.exports = mongoose.model('Sauce', sauceSchema);            //on l'exporte
