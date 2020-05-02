const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyCQk_Zvwzj8VCyGY47qENyNJP2HzT9Qc5k",
    authDomain: "lovely-pet-backend.firebaseapp.com",
    databaseURL: "https://lovely-pet-backend.firebaseio.com",
    projectId: "lovely-pet-backend",
    storageBucket: "lovely-pet-backend.appspot.com",
    messagingSenderId: "92228288509",
    appId: "1:92228288509:web:9ced95252041f895e16394",
    measurementId: "G-8KCTSFZ5EZ"
};

firebase.initializeApp(firebaseConfig);
module.exports = firebase;