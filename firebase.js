var firebaseConfig = {
    apiKey: "AIzaSyA-rJMP8LK2IqQIE0Az8jEB71AZguSrGSk",
    authDomain: "bres--todo-app.firebaseapp.com",
    projectId: "bres--todo-app",
    storageBucket: "bres--todo-app.appspot.com",
    messagingSenderId: "781474728770",
    appId: "1:781474728770:web:445ac239c103a7175696db",
    measurementId: "G-9FLT98EN7T"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();