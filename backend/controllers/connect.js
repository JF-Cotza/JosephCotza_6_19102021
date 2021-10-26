const userDb = 'P1qu4nt3_MNG';
const pswordDb = 'P11qu4nt3M4n4g3rP4ssw0rdF0rD8';
const linkDb = 'cluster0.yepbw.mongodb.net';
const nameDb = 'piiq_db';
const writting = '&w=majority';  
//w = write concern, c'est la manière dont MongoDB enregistre les datas

exports.URI = 'mongodb+srv://' + userDb + ':' + pswordDb + '@' + linkDb + '/' + nameDb + '?retryWrites=true'+writting; 

exports.token = { value: 'RANDOM_TOKEN_SECRET_FOR_DEVELOPPEMENT', end: '24h' }

/*
Write concern

Le write concern est la façon dont Mongo va écrire sur les noeuds du Replica Set :

    w=0 : on ne sait pas si l’écriture s’est bien passée ou pas. On n’a pas de retour.
    w=1 : par défaut : sauve sur le noeud primaire et rend la main immédiatement : la réplication sur le noeuds secondaires est asynchrone
    w=majority : attend d’avoir écrit sur la majorité des noeuds
    w=2 à 12 : attend d’avoir écrit sur N noeuds
    w=all : attend d’avoir écrit sur tous les noeuds du Replica Set.

Dès que w > 1, si Mongo n’a pas réussi à écrire sur le nombre de noeuds spécifié (car l’un est down par exemple), Mongo attendra indéfiniment d’avoir écrit sur le bon nombre de noeuds. Attention donc à ce paramétrage.
On peut y ajouter la propriété de journalisation (j=true). Mongo va alors attendre de journaliser les données avant de nous retourner sa réponse.
*/
