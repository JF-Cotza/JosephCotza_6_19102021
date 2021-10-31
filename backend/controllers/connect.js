const userDb = 'P1qu4nt3_MNG';
const pswordDb = 'P11qu4nt3M4n4g3rP4ssw0rdF0rD8';
const linkDb = 'cluster0.yepbw.mongodb.net';
const nameDb = 'piiq_db';
const writting = '&w=majority';  
//w = write concern, c'est la manière dont MongoDB enregistre les datas

exports.URI = 'mongodb+srv://' + userDb + ':' + pswordDb + '@' + linkDb + '/' + nameDb + '?retryWrites=true'+writting; 

exports.token = { value: 'RANDOM_TOKEN_SECRET_FOR_DEVELOPPEMENT', end: '24h' }


