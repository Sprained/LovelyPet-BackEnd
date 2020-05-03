const firebase = require('../database/firebase');

module.exports = {
    async store(req, res){
        await firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return res.json(errorCode, errorMessage)
        });

        firebase.auth().onAuthStateChanged(user => {
            firebase.database().ref('users/' + user.uid).set({
                name: req.body.name,
                address: req.body.address,
                number: req.body.number,
                ddd: req.body.ddd,
                phone: req.body.phone,
            });
        });

        return res.json(req.body);
    }
}