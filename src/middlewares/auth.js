const firebase = require('../database/firebase');

module.exports = (req ,res, next) => {
    firebase.auth().onAuthStateChanged(user => {
        if(!user){
            return res.status(400).json({ error: 'Usuario não logado!' });
        }

        req.uid = user.uid;
        req.email = user.email;

        firebase.database().ref('users/' + user.uid).once('value').then(function(snapshot){
            req.name = snapshot.val().name;
            req.address = snapshot.val().address;
            req.number = snapshot.val().number;
            req.ddd = snapshot.val().ddd;
            req.phone = snapshot.val().phone;
        })
        
        return next();
    });
}