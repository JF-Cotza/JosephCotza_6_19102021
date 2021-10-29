/* spécifique*/
const Sauce = require('../models/sauce');
const fileSystem=require('fs');                     //donne accés aux opérations systèmes, par exemple la suppression de fichier
const { collection } = require('../models/sauce');

exports.createSauce = (req,res, next) => {
    const sauceParsing=JSON.parse(req.body.sauce)
    delete sauceParsing._id; // pour supprimer un id présent dans la req
    const sauce=new Sauce({
        ...sauceParsing,
        imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        
    });
    sauce.save()
        .then(()=>{
              res.status(201).json({message:'sauce créée'})})
        .catch(error=> {
            res.status(400).json({error})}
            );
};

exports.getAllSauce = (req,res,next) => {
    Sauce.find()                  //find permet de chercher dans la DB. sans rien = tous
        .then ((sauces)=>{
            res.status(200).json(sauces)
            })
        .catch (error => {
            res.status(400).json({error})
        })
};

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne( { _id : req.params.id })     //on recherche dans la DB, l'objet ayant pour _id, celui passé en paramétre
        .then(sauce => {
            const sauceStringify=JSON.stringify(sauce);
            const sauceParsing=JSON.parse(sauceStringify);
            let id = req.body.userId;
            let valueToReturn;
            let statut;
            if (sauceParsing.userLiked.length>0){
                for (let user of sauceParsing.userLiked) {
                    if (user == id) {
                        statut += 'L';                           //la personne a déjà liké
                    }
                    else{
                        console.log('déjà des likes mais pas de cet user');
                    }
                console.log('like:'+user);
                }
                console.log('userParsing !=[]');
            }
            else{
                console.log('sauce parsing like');
                console.log(sauceParsing.userLiked);
            };
            if (sauceParsing.userDisliked.length>0){
                for (let user of sauceParsing.userDisliked) {
                    if (user == id) {
                        statut += 'D';                         //la personne n'a  liké mais disliké
                    }
                    else {
                        console.log('déjà des dislikes mais pas de cet user');
                    }
                console.log('dislike:'+user);
                };
                console.log('user parsing dislike !=[]');
                //console.log(sauceParsing.userDisliked.length);
            }
            else {
                console.log('sauce parsing dislike =[]');
                //console.log(sauceParsing);
            };
    

            /*console.log(statut);*/
            console.log('aprés statut');
            console.log(statut);
           // console.log(sauceParsing);
            switch (statut){
                case 'L':
                    valueToReturn=1;
                    break;
                case 'D':
                    valueToReturn=-1;
                    break;
                default:
                    valueToReturn=0;
            };

            console.log('value '+valueToReturn);
        
        //à côté des pouces : nombre de userLiked et Dislikes
            sauceParsing.likes=sauceParsing.userLiked.length;
            sauceParsing.dislikes=sauceParsing.userDisliked.length;

            res.status(200).json(sauceParsing)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
};

exports.modifySauce = (req,res,next) => {
    const sauceObject=req.file ?
    {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body};
    Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id : req.params.id })     //on recherche dans la DB, l'objet ayant pour _id, celui passé en paramétre)     //on recherche dans la DB, l'objet ayant pour _id, celui passé en paramétre pour pouvoir le modifier
        .then(() => res.status(200).json({message : 'sauce mise à jour'}))
        .catch((error) =>{
             res.status(400).json({ error })
        });
};

exports.deleteSauce = (req,res,next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce=>{
            const filename=sauce.imageUrl.split('/image')[1]; // pour récupérer le nom du fichier à supprimer, on récupére l'image URL. l'image url contient le chemin complet répertoire('/image/')+nom. avec le split on obtient un tableau et on ne garde que la partie après le répertoire càd le nom du fichier
            fileSystem.unlink(`/image/${filename}`, ()=>        // on appele la méthode unlink de fs pour supprimer le fichier .unlick('chemin+nom du fichier à supprimer', fonction à éxécuter quand la suppression est effectuée)
                Sauce.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'sauce supprimée' }))
                    .catch(error => {
                        res.status(400).json({ error })
                    })
                    )
                })
        .catch((error) => {
            res.status(500).json({ error })
        });

};


exports.likes =(req,res,next)=>{
    console.log('test 12');
    console.log(req.body); // req.body unlike : { userId: '61768143e4cc107a9e3f131c', like: -1 } // like { userId: '61768143e4cc107a9e3f131c', like: 1 }
    
    let query = { _id: req.params.id };
    let like=req.body.like;
    let id=req.body.userId;
    
    Sauce.findOne(query)
    .then((sauce)=>{
        if(like==1){
            Sauce.updateOne(sauce,{$push:{userLiked:id}}) 
                .then(()=>res.status(201).json({message:'Mise à jour effectuée'}))
                .catch(error=>res.status(500).json({error}))
            }
        else if (like == -1) {
            Sauce.updateOne(sauce, { $push: { userDisliked: id } })
                .then(() => res.status(201).json({ message: 'Mise à jour effectuée' }))
                .catch(error => res.status(500).json({ error }))
        }
        else if (like==0){
            {
                Sauce.updateOne(sauce, { $pull: { userLiked: id, userDisliked:id } })
                    .then(() => res.status(201).json({ message: 'Mise à jour effectuée' }))
                    .catch(error => res.status(500).json({ error }))
            }
        }
    })
    .catch(error=>res.status(400).json({error}))
}
                         
/*            
const query = { "name": "Popeye" };
const updateDocument = {
    $push: { "items.$[].toppings": "fresh mozzarella" }
};
const result = await pizza.updateOne(query, updateDocument);
*/


/*
pour les sauces
// création
    //app.post('/api/sauces', (req, res, next)) =>
    //app.post('/', (req, res, next)) =>
createSauce(req,res,next)
    entrée / body req: { sauce: String, image: File }
    fonction:  Capture et enregistre l'image,
                        Analyse la sauce transformée en chaîne de caractères et l'enregistre dans la base de données en
                        définissant correctement son imageUrl.
                        Initialise les likes et dislikes de la sauce à 0 et les usersLiked et usersDisliked avec des tableaux vides.
                        Remarquez que le corps de la demande initiale est vide; lorsque multer est ajouté, il renvoieune chaîne pour
                        le corps de la demande en fonction des données soumises avec le fichier.
    sortie / res : { message: String } Verb

// lecture
    //app.get('/api/sauces', (req, res, next)) =>
    //app.get('/', (req, res, next)) =>
getAllSauce(req,res,next)
    sortie / res : toutes les sauces
    //app.get('/api/sauces/:id', (req, res, next))=>
getOneSauce(req,res,next)
    sortie / res : la sauce correspondant à id

// modification
    //app.put('/api/sauces/:id', (req, res, next))=>
    //app.put('/:id', (req, res, next))=>
modifySauce(req,res,next)
    entrée / body req:d EITHER Sauce as JSON OR { sauce: String, image: File }
    fonction:  Met à jour la sauce avec l'_id fourni. Si une image est téléchargée, elle est capturée et l’imageUrl de la
                        sauce est mise à jour.
                        Si aucun fichier n'est fourni, les informations sur la sauce se trouvent directement dans le corps de la requête
    (req.body.name, req.body.heat, etc.).
                        Si un fichier est fourni, la saucetransformée en chaîne de caractères se trouve dans req.body.sauce.Notez que
                        le corps de la demande initiale est vide; lorsque multer est ajouté, il renvoie une chaîne du corps de la
                        demande basée sur les données soumises avec le fichier
    sortie / res : { message: String }
// suppression
    //app.delete('/api/sauces/:id', (req, res, next)) =>
    //app.delete('/:id', (req, res, next))=>
deleteSauce(req,res,next)
    fonction:      Supprime la sauce avec l'_idfourni.
    sortie / res : { message: String }
// like
    //app.post('/api/sauces/:id/like', (req, res, next))=>
app.post('/:id/like', (req, res, next))
    entrée / body req: { userId: String, like: Number }
    fonction:      Définit le statut « Like » pour l' userId fourni.
                        Si like = 1, l'utilisateur aime (= like) la sauce.
                        Si like = 0, l'utilisateur annule son like ou son dislike.
                        Si like = -1, l'utilisateur n'aime pas(= dislike) la sauce.
    L'ID de l'utilisateur doit être ajouté ou retiré du tableau approprié.Cela permet de garder une trace de leurs
                        préférences et les empêche de liker ou de ne pas disliker la même sauce plusieursfois:
                            un utilisateur ne peut avoir qu'une seule valeur pour chaque sauce.
                        Le nombre total de « Like » et de « Dislike » est mis à jour à chaque nouvelle notation.
    sortie / res : { message: String }

*/