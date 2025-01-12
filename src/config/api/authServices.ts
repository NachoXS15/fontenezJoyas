import { auth } from "./firebaseConfig"
import { userProps } from "../definitions"
import { browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword, signOut } from "firebase/auth"

export const logIn = async({email, password, keepSession}: userProps) => {
    try {
        if (keepSession) {
            await setPersistence(auth, browserLocalPersistence)
        } else {
            await setPersistence(auth, browserSessionPersistence)
        }
        signInWithEmailAndPassword(auth, email, password)
        console.log("Session creada");
        
    } catch (error) {
        console.log("Error: ", error); 
    }
}

export const logOut = async() => {
    try {
        signOut(auth)
    } catch (error) {
        console.log("Error al iniciar sesión: ", error);
    }
}