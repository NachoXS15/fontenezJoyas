import { FormEvent, useEffect, useState } from "react"
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"
import { logIn } from "../../config/api/authServices";
import {auth} from '../../config/api/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";
export default function Login() {
    const [keepSession, setKeepSession] = useState(false)
    const navigate = useNavigate();
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/dashboard")
            }
        })

        return () => unsubscribe();
    }, [])

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const mail = formData.get("mail")?.toString() || "";
        const pass = formData.get("pass")?.toString() || "";

        try {
            await logIn(mail, pass, keepSession)
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full min-h-screen" style={{ fontFamily: 'quador' }}>
            <section className="flex items-center bg-gray-100 justify-center h-full">
                <div className="w-4/5 xl:w-3/5 h-3/4  border shadow-lg flex items-center justify-center flex-col">
                    <div className="flex flex-col items-center">
                        <h2 className="mb-2 text-center text-blue-800 font-bold text-4xl">Acceso</h2>
                        <hr className="border w-20 border-purplemain" />
                    </div>
                    <form action="" className="w-full px-14 flex items-center justify-center flex-col" onSubmit={handleSubmit}>
                        <div className="w-full flex items-start flex-col my-3">
                            <label htmlFor="mail" className="text-xl">Email</label>
                            <input type="email" name="mail" id="mail" className="w-full border-2 h-10 px-2.5 rounded border-blue-600" />
                        </div>
                        <div className="w-full flex items-start flex-col my-3">
                            <label htmlFor="pass" className="text-xl">Contraseña</label>
                            <input type="password" name="pass" id="pass" className="w-full px-2.5 border-2 h-10 rounded border-blue-600" />
                        </div>
                        <div className="w-full flex items-center gap-2.5">
                            <input type="checkbox" checked={keepSession} onChange={() => setKeepSession(!keepSession)} id="check" />
                            <label htmlFor="check" className="text-xl">Mantener sesión iniciada</label>
                        </div>
                        <button type="submit" className="rounded bg-blue-800 px-5 py-2 mt-10 text-white text-xl">Iniciar Sesión</button>
                    </form>
                </div>
            </section>
            <div className="hidden bg-purplemain lg:flex items-center justify-center h-full">
                <img src={logo} className="w-80 xl:w-[500px]" alt="" />
            </div>
        </main>
    )
}
