const firebase = require('../database/firebase');

module.exports = {
    async store(req, res){
        const { name, race, age, gender } = req.body;
        const ongId = req.uid;
        const catId = await firebase.database().ref('/cats/').push().key;

        await firebase.database().ref('/cats/' + catId).set({
            name,
            race,
            age,
            gender,
            ong: ongId,
            adopted: false
        });

        return res.json("Cadastro realizado com sucesso");
    },
    async index(req, res){
        const cats = await firebase.database().ref('/cats/').once('value');

        return res.json(cats);
    }
}