/* spécifique*/
const Sauce = require('../models/sauce');
const fileSystem=require('fs');                     //donne accés aux opérations systèmes, par exemple la suppression de fichier


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
           sauce.likes=sauce.usersLiked.length;
           sauce.dislikes=sauce.usersDisliked.length;
            res.status(200).json(sauce); //sauceParsing)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
};

exports.modifySauce = (req,res,next) => {
    let diskImageUrl;
    let key='15';

    const sauceObject = req.file ?
        {
            ...JSON.parse(req.body.sauce),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };

    Sauce.findOne({ _id: req.params.id })
        .then((sauce)=>{
            diskImageUrl=sauce.imageUrl;
            if (sauceObject.imageUrl){
                const filename=diskImageUrl.split('/images/')[1]; 
                fileSystem.unlink(`./images/${filename}`, ()=>console.log('fichier supprimé'))
            }
            else{console.log("image non modifiée")};
        })
        .catch(() => diskImageUrl='')


    Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id : req.params.id })     //on recherche dans la DB, l'objet ayant pour _id, celui passé en paramétre)     //on recherche dans la DB, l'objet ayant pour _id, celui passé en paramétre pour pouvoir le modifier
        .then(() => res.status(200).json({message : 'sauce mise à jour'}))
        .catch((error) =>{
             res.status(400).json({ error })
        });
};

exports.deleteSauce = (req,res,next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce=>{
            const filename=sauce.imageUrl.split('/images/')[1]; // pour récupérer le nom du fichier à supprimer, on récupére l'image URL. l'image url contient le chemin complet répertoire('/image/')+nom. avec le split on obtient un tableau et on ne garde que la partie après le répertoire càd le nom du fichier
            fileSystem.unlink(`./images/${filename}`, ()=>        // on appele la méthode unlink de fs pour supprimer le fichier .unlink('chemin+nom du fichier à supprimer', fonction à éxécuter quand la suppression est effectuée)
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
    let query = { _id: req.params.id };
    let like=req.body.like;
    let id=req.body.userId;
    
    Sauce.findOne(query)
    .then((sauce)=>{
        if(like==1){
            Sauce.updateOne(sauce,{$push:{usersLiked:id}}) 
                .then(()=>res.status(201).json({message:'Mise à jour effectuée'}))
                .catch(error=>res.status(500).json({error}))
            }
        else if (like == -1) {
            Sauce.updateOne(sauce, { $push: { usersDisliked: id } })
                .then(() => res.status(201).json({ message: 'Mise à jour effectuée' }))
                .catch(error => res.status(500).json({ error }))
        }
        else if (like==0){
            {
                Sauce.updateOne(sauce, { $pull: { usersLiked: id, usersDisliked:id } })
                    .then(() => res.status(201).json({ message: 'Mise à jour effectuée' }))
                    .catch(error => res.status(500).json({ error }))
            }
        }
    })
    .catch(error=>res.status(400).json({error}))
}
