/* spécifique*/
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const token = { value: 'RANDOM_TOKEN_SECRET_FOR_DEVELOPPEMENT', end:'24h'}

exports.userSigning=(req,res,next)=>{
    bcrypt.hash(req.body.password, 10) // on demande à bcryp de haché le mot de passe en le 'salant 10 fois'
        .then( hash => {
            const user=new User({
                email:req.body.email,
                password:hash
            });

            user.save().then(
                () => 
                    res.status(201).json({ 
                        message: 'utilisateur créé' 
                    })
                )
                .catch(error =>{
                        console.log('erreur création user '+error.message);
                        res.status(400).json({ error })
                        });
            })
        .catch(error => res.status(500).json({error}));
};

//utilisateur créé mais message d'erreur ... => du à la création de link


exports.userLogin=(req,res,next)=>{
    User.findOne({email : req.body.email})
        .then(user=>{
            if(!user){
                return res.status(401).json({error:"l'utilisateur n'existe pas"})
            }
            bcrypt.compare(req.body.password, user.password)            //bcrypt répond par un booléen
                .then(valid=>{              
                    if(!valid){
                        return res.status(401).json({ error: "connexion non autorisée" })
                    }
                    res.status(200).json({ 
                        userId:user._id,
                        token:jwt.sign({userId:user._id}, token.value ,{expiresIn:token.end})
                    })

                })
                
            .catch(error=> {
                console.log('erreur1 login user ' + error.message);
                res.status(500).json({error})
                })
        })
        .catch(error => {
            console.log('erreur2 login user ' + error.message);
            res.status(500).json({error})
        })
};

//l'id est bien renvoyé mais j'ai une erreur 500...

/* à partir des spécifications
suite à la création du controler
pour les user
    // enregistrement/création
        exports.userSigning((req,res,next))=>
            entrée / body req : { email: string, password: string }
            fonction : Hachage du mot de passe de l'utilisateur, ajout del'utilisateur à la base dedonnées.
            sortie / res : { message: string }
    // connexion
        exports.userLogin(req,res,next)
            entrée / body req : { email: string, password: string }
            fonction :  Vérification desinformations d'identification de l'utilisateur,
                        renvoie l _id de l'utilisateur depuis la base de données et un token web JSON signé
                        (contenant également l'_idde l'utilisateur).
            sortie /res :{ userId: string, token: string }
*/