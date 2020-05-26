const firebase = require('../database/firebase');

module.exports = {
    async store(req, res){
        const { name, race, age, gender } = req.body;
        const ongId = req.uid;
        const dogId = await firebase.database().ref('/dogs/').push().key;

        await firebase.database().ref('/dogs/' + dogId).set({
           name,
           race,
           age,
           gender,
           ong: ongId,
           adopted: false
        });

        return res.json("Cadastro realizado com sucesso")
    },
    async index(req, res){
        const dogs = await firebase.database().ref('/dogs/').once('value');

        return res.json( dogs );
    }
}