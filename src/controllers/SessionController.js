const firebase = require('../database/firebase');

module.exports = {
    async store(req, res){
        let value = []
        await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return res.json(errorCode, errorMessage);
        });

        firebase.auth().onAuthStateChanged(async user => {
            value.push(user.uid)
            await firebase.database().ref('users/' + user.uid).once('value').then(function(snapshot){
                value.push(snapshot.val().name)
                const name = snapshot.val() && snapshot.val().name;
            });
            return res.json(value);
        });
    }
}