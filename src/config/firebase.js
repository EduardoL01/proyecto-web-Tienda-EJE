import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// RECUERDEN COLOCAR SU CONFIGURACIÓN EN LA SIGUIENTE CONSTANTE
const firebaseConfig = {
  apiKey: "AIzaSyDpgGdmtZ5H7aFEbRNxDAQqxZ2YCWA9fzM",
  authDomain: "proyecto-web-c5bff.firebaseapp.com",
  databaseURL: "https://proyecto-web-c5bff-default-rtdb.firebaseio.com",
  projectId: "proyecto-web-c5bff",
  storageBucket: "proyecto-web-c5bff.appspot.com",
  messagingSenderId: "1054062661016",
  appId: "1:1054062661016:web:3858fcb1e4ca5ece342fed"
};

firebase.initializeApp(firebaseConfig)
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()

export default firebase
