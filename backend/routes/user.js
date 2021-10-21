//structure de base bour les futures routes
const express = require('express');
const router = express.Router();
const toUserFunction = require('../controllers/user');

router.post('/signup', toUserFunction.userSigning);
router.post('/login', toUserFunction.userLogin);

module.exports = router;

//ce fichier-ci correspond à /api/auth suite à la création de la route


