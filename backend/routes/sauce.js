
//structure de base bour les futures routes
const express = require('express');
const router = express.Router();
const toSauceFunction=require('../controllers/sauce')

router.post('/', toSauceFunction.createSauce);
router.get('/', toSauceFunction.getAllSauce);
router.get('/:id', toSauceFunction.getOneSauce);
router.put('/:id', toSauceFunction.modifySauce);
router.delete('/:id', toSauceFunction.deleteSauce);

module.exports = router;
//ce fichier correpond à /api/sauces suite à la création de la route

