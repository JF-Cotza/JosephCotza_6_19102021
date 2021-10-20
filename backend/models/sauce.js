const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({   //on crée le modèle     / les infos du projet
    userId: { type: String, required: true, unique: true },     // userId : String — l'identifiant MongoDB unique de l'utilisateur qui a créé la sauce
    name: { type: String, required: true, unique: true },       // name : String — nom de la sauce
    manufacturer: { type: String, required: true },             // manufacturer : String — fabricant de la sauce
    description: { type: String, required: true },              // description : String — description de la sauce
    mainPepper: { type: String, required: true },               // mainPepper : String — le principal ingrédient épicé de la sauce
    imageUrl: { type: String, required: true },                 // imageUrl: String — l'URL de l'image de la sauce téléchargée par l'utilisateur
    heat: { type: number, required: true },                     // heat: Number — nombre entre 1 et 10 décrivant la sauce
    likes: { type: number, required: false },                   // likes : Number — nombre d'utilisateurs qui aiment (= likent) la sauce
    dislikes: { type: number, required: false },                // dislikes : Number — nombre d'utilisateurs qui n'aiment pas (= dislike) la sauce
    userLiked: { type: [String], required: false},              // usersLiked: ["String <userId>"] — tableau des identifiants des utilisateurs qui ont aimé (= liked) la sauce
    userDisliked: { type: [String], required: false }           // usersDisliked: ["String <userId>"] — tableau des identifiants des utilisateurs qui n'ont pas aimé (= disliked) la sauce
});


sauceSchema.plugin(uniqueValidator);                                 //uniqueValidator renforce la sécurité et évite des bugs
module.exports = mongoose.model('Sauce', sauceSchema);            //on l'exporte

/* notes
unique : 
    - une sauce ne peut être créée que par un utilisateur
    - une sauce ne peut exister qu'en 1 exemplaire (en théorie) dans la DB

like / dislike :
https://qastack.fr/programming/19695058/how-to-define-object-in-array-in-mongoose-schema-correctly-with-2d-geo-index

required: false
    - la sauce n'est pas forcément likée ou dislikée
*/