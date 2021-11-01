/* spécifique*/
const User = require('../models/user');
const connect=require('./connect');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const token = connect.token;

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
                        res.status(400).json({ error })
                        });
            })
        .catch(error => res.status(500).json({error}));
};

exports.userLogin=(req,res,next)=>{
    User.findOne({email : req.body.email})
        .then(user=>{
            if(!user){
                return res.status(401).json({ error }) //:"l'utilisateur n'existe pas"
            }
            bcrypt.compare(req.body.password, user.password)            //bcrypt répond par un booléen
                .then(valid=>{              
                    if(!valid){
                        return res.status(401).json({ error }) //: "connexion non autorisée" 
                    }
                    res.status(200).json({ 
                        userId:user._id,
                        token:jwt.sign({userId:user._id}, token.value ,{expiresIn:token.end})
                    })

                })     
            .catch(error=> {
                res.status(500).json({error})           //erreur serveur
                })
        })
        .catch(error => {
            res.status(500).json({error})
        })
};
