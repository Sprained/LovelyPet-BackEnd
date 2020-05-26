const firebase = require('firebase');
require('firebase/storage');

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTG_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: "lovely-pet-backend",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MENSUERMENT_ID
};

firebase.initializeApp(firebaseConfig);
module.exports = firebase;