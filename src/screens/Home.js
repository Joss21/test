import React from "react";
import AdminView from "../components/AdminView";
import UserView from "../components/UserView";
import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";


const auth = getAuth(firebaseApp);

function Home({ user }) {
    return (
        <>
            <header className='gf-header'>
               
                <button onClick={() => signOut(auth)} class="salir">Cerrar sesión</button>
            </header>
            <section> {user.rol === "admin" ? <AdminView /> : <UserView />}</section>
        </>
    );
}

export default Home;



