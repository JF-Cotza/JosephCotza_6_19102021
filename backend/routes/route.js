//structure de base bour les futures routes

//on autorise les origines croisées càd, port frontend et backend différent
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//connexion à la DB
mongoose.connect('mongodb+srv://P1qu4nt3_MNG:M4n4g1nGC0D3F0RTh1s0n3@cluster0.yepbw.mongodb.net/piiq_db?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => {
        console.log('Connexion à MongoDB échouée !'),
            console.log(error.message)
    });

exports.toto=()=>{
    console.log('route ok');
};

