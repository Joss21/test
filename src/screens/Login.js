import React, { useState } from "react";
import firebaseApp from "../firebase/credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);

function Login() {
    const firestore = getFirestore(firebaseApp);
    const [isRegistrando, setIsRegistrando] = useState(false);

    async function registrarUsuario(email, password, rol) {
        const infoUsuario = await createUserWithEmailAndPassword(auth, email, password).then((usuarioFirebase) => {
            return usuarioFirebase;
        });
        console.log(infoUsuario.user.uid);
        const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
        setDoc(docuRef, { correo: email, rol: rol });
    }

    function submitHandler(e) {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const rol = e.target.elements.rol.value;

        console.log("submit", email, password, rol);

        if (isRegistrando) {
            registrarUsuario(email, password, rol);
        } else {
            signInWithEmailAndPassword(auth, email, password);

        }
    }
    return (
        <div className="Auth-form-container">
            <form onSubmit={submitHandler} className="Auth-form">
                <div className="form-group mt-3">
                <h1 className="Auth-form-title">Bienvenidos</h1>
                <h2 className="Auth-form-title">{isRegistrando ? "Registrate" : "Inicia sesion"}</h2>
                    <label> Correo electronico:</label>
                    <input type="email" id="email" className="form-control mt-1" />
                </div>
                <div className="form-group mt-3">
                    <label>Contraseña:</label>
                    <input type="password" id="password" className="form-control mt-1" />
                </div>
                <div className="form-group mt-3">
                <label>
                    Rol:
                    <select id="rol" className="form-control mt-1" >
                        <option value="admin">Administrador</option>
                        <option value="user">Usuario</option>
                    </select>
                </label>
                </div>
                <div className="d-grid gap-2 mt-3">
                <input
                    type="submit"
                    value={isRegistrando ? "Registrar" : "Iniciar sesión"}  className="btn btn-primary" />
                    <div className="d-grid gap-2 mt-3">   </div>
                <button onClick={() => setIsRegistrando(!isRegistrando)} className="btn btn-primary">
                    {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
                </button>
            </div>
            </form>
            
        </div> );
}

export default Login;