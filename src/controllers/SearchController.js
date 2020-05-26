const firebase = require('../database/firebase');

module.exports = {
    async index(req, res){
        const dogs = await firebase.database().ref('/dogs/').once('value');
        const cats = await firebase.database().ref('/cats/').once('value');

        return res.json({dogs, cats});
    }
}