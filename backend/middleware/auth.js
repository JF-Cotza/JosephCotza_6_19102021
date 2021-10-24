const jwt = require('jsonwebtoken');
const link = require('../controllers/connect');
const linkedKey=link.token.value;

module.exports = (req, res,next) =>{
    
    try{
        const token = req.headers.authorization.split(' ')[1]; // on split pour récupérer la valeur de bearer
        const checkToken=jwt.verify(token,linkedKey);
        const userId=checkToken.userId;
        if(req.body.userId && req.body.userId !== userId){
            throw 'user ID invalide'
        }
        else{
            next();
        }
    }
    catch(error){
            res.status(401).json({error:error | "échec de l'identification"}); // si pas de message d'erreur, message personnalisé
        }
};