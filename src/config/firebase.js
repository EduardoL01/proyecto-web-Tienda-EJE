import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// RECUERDEN COLOCAR SU CONFIGURACIÓN EN LA SIGUIENTE CONSTANTE
const firebaseConfig = {
  apiKey: "AIzaSyB7NcuxE0E9AiIeHB5CePO4F9zPmfie_aA",
  authDomain: "proyecto-web-214ff.firebaseapp.com",
  projectId: "proyecto-web-214ff",
  storageBucket: "proyecto-web-214ff.appspot.com",
  messagingSenderId: "670715114898",
  appId: "1:670715114898:web:f70e11d5d0372d302dfd4b"
};

firebase.initializeApp(firebaseConfig)
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()

export default firebase
