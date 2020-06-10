const firebase = require('../database/firebase');

module.exports = {
    async store(req, res){
        await firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password).catch(function(error){
            const errorCode = error.code;
            let errorMessage;

            if(errorCode === "auth/invalid-email") errorMessage = "Email informado é invalido!";
            if(errorCode === "auth/email-already-in-use") errorMessage = "Já existe uma conta com esse email!";
            if(errorCode === "auth/weak-password") errorMessage = "Senha muito fraca!";
            
            return res.status(400).json(errorMessage)
        });

        firebase.auth().onAuthStateChanged(async user => {
            await firebase.database().ref('users/' + user.uid).set({
                name: req.body.name,
                address: req.body.address,
                number: req.body.number,
                ddd: req.body.ddd,
                phone: req.body.phone,
            });
        });

        return res.json("Cadastro realizado com sucesso!");
    }
}