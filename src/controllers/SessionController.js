const firebase = require('../database/firebase');

module.exports = {
    async store(req, res){
        await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).catch(function(error){
            const errorCode = error.code
            let errorMessage;

            if(errorCode === "auth/invalid-email" || errorCode === "auth/wrong-password") errorMessage = "Email ou senha incorretos!";
            if(errorCode === "auth/user-not-found") errorMessage = "Email não cadastrado!";

            return res.status(400).json({error: errorMessage});
        });
        return res.json({message: 'logado'})
    },
    async delete(req, res){
        await firebase.auth().signOut().then(function(){
            return res.status(200).end();
        }).catch(function(error){
            const errorCode = error.code;
            return res.json(errorCode)
        })
    }
}