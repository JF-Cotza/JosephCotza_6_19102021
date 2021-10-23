/* spécifique*/
const User = require('../models/user');

exports.userSigning=(req,res)=>{
   console.log(' email: '+req.body.email+' password: '+req.body.password);
    const user=new User({...req.body})
    user.save()
     .then(()=>console.log('toto créé'))
     .catch((error)=>console.log('erreur save: '+error.message))
};



exports.userLogin=()=>{
    console.log('user login')
};

/* à partir des spécifications
suite à la création du controler
pour les user
    // enregistrement/création
            //app.post('/api/auth/signup',(req,res,next)) =>
            //app.post('/signup',(req,res,next))=>
        exports.userSigning((req,res,next))=>
            entrée / body req : { email: string, password: string }
            fonction : Hachage du mot de passe de l'utilisateur, ajout del'utilisateur à la base dedonnées.
            sortie / res : { message: string }
    // connexion
            //app.post('/api/auth/login',(req, res,next) =>
            //app.post('/login',(req, res,next)
        exports.userLogin(req,res,next)
            entrée / body req : { email: string, password: string }
            fonction :  Vérification desinformations d'identification de l'utilisateur,
                        renvoie l _id de l'utilisateur depuis la base de données et un token web JSON signé
                        (contenant également l'_idde l'utilisateur).
            sortie /res :{ userId: string, token: string }
*/