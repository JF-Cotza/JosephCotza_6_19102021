const multer = require('multer');
const MIMES_TYPES ={                //dictionnaire des formats de fichiers accépter et obtenus à partir des informations du fichier (on n'a pas accés à l'extension)
    'image/jpg' : 'jpg',            // si le mime_type est image de type jpg, on associe la valeur jpg
    'image/jpeg': 'jpg',
    'image/png' : 'png'         
};


const storage = multer.diskStorage({
    destination: (req, file, callback) => {//null = pas d'erreur, 'images' dossier cible.
        callback(null,'images')
                
    },
    filename: (req, file, callback) =>{

        const name=file.originalname.split(' ').join('_'); //on split s'il y a des espaces et on met des _ pour recoller et éviter les erreurs serveurs
        const extension=MIMES_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension); // Date.now() renvoi la date à la miliseconde près pour transformer le nom du fichier en élément le plus unique posssible
    }
})

module.exports=multer({storage:storage}).single('image');