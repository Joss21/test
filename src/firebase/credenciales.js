// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDDqcAeMx0_XYiO_NoLAmDC_Vv6rGUi_9Y",

  authDomain: "front-end-1b208.firebaseapp.com",

  projectId: "front-end-1b208",

  storageBucket: "front-end-1b208.appspot.com",

  messagingSenderId: "1078997167032",

  appId: "1:1078997167032:web:66eb389ec2c6db33d6fd4d"

};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
