
//structure de base bour les futures routes
const express = require('express');
const router = express.Router();
const toSauceFunction=require('../controllers/sauce');
const checker=require('../middleware/auth');

router.post('/', checker, toSauceFunction.createSauce);
router.get('/', checker, toSauceFunction.getAllSauce);
router.get('/:id',checker, toSauceFunction.getOneSauce);
router.put('/:id',checker, toSauceFunction.modifySauce);
router.delete('/:id',checker, toSauceFunction.deleteSauce);

module.exports = router;
//ce fichier correpond à /api/sauces suite à la création de la route

