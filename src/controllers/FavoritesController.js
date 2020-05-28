const firebase = require('../database/firebase');

module.exports = {
    async index(req, res){
        const favorites = await firebase.database().ref('/favorites/').once('value');

        return res.json(favorites);
    },
    async store(req, res){
        const userId = req.uid;
        const favId = await firebase.database().ref('/favorites/').push().key;

        await firebase.database().ref('/favorites/' + favId).set({
            userId,
            petId: req.params.petid
        })

        return res.json('Pet favoritado com sucesso!')
    }
}