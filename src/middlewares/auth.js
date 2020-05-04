const firebase = require('../database/firebase');

module.exports = (req ,res, next) => {
    firebase.auth().onAuthStateChanged(user => {
        if(!user){
            return res.status(400).json({ error: 'Usuario não logado!' });
        }
        return next();
    });
}