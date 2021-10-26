
//structure de base bour les futures routes
const express = require('express');
const router = express.Router();
const toSauceFunction=require('../controllers/sauce');
const checker=require('../middleware/auth');
const multer=require('../middleware/multer');

router.post('/', checker,multer, toSauceFunction.createSauce); //multer après authentification pour éviter enregitrement images inutiles
router.post('/:id/like',toSauceFunction.likes);
router.get('/', checker, multer, toSauceFunction.getAllSauce);
router.get('/:id',checker, multer, toSauceFunction.getOneSauce);
//router.get('/id/like',toSauceFunction.howManyLike);
router.put('/:id',checker, multer, toSauceFunction.modifySauce);
router.delete('/:id',checker, multer, toSauceFunction.deleteSauce);

module.exports = router;
//ce fichier correpond à /api/sauces suite à la création de la route

