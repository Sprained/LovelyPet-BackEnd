const firebase = require('../database/firebase');

module.exports = (req, res, next) => {
    firebase.database().ref('users/' + req.uid).once('value').then(function(snapshot){
        //const ong = snapshot.val().ong;
        //console.log(snapshot.val().nome)
        if(!snapshot.child('ong').exists()){
            return res.status(400).json('Usuario não é ong!');
        }

        return next();
    });
}