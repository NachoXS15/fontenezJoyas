import { auth } from "./firebaseConfig"
import { browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword, signOut } from "firebase/auth"

export const logIn = async(email: FormDataEntryValue, password: FormDataEntryValue, keepSession: boolean) => {
    try {
        if (keepSession) {
            await setPersistence(auth, browserSessionPersistence)
        } else {
            await setPersistence(auth, browserLocalPersistence)
        }
        signInWithEmailAndPassword(auth, email.toString(), password.toString())
        console.log("Session creada");
    } catch (error) {
        console.log("Error: ", error); 
    }
}

export const logOut = async() => {
    try {
        signOut(auth);
        console.log("Session cerrada");
        window.location.href = "/admin"
        
    } catch (error) {
        console.log("Error al cerrar sesión: ", error);
    }
}