import { useEffect } from 'react'
import logo from '../../assets/logo.png'
import { SignOut } from '../../components/ui/Icons'
import { logOut } from '../../config/api/authServices'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../../config/api/firebaseConfig'
import { useNavigate } from 'react-router-dom'
export default function Dashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/admin")
            }
        })

        return () => unsubscribe()
    }, [])

    return (
        <div className="flex items-center w-full" style={{ fontFamily: 'quador' }}>
            <aside className="bg-purplemain min-h-screen w-1/5 py-10 flex justify-between items-center flex-col">
                <div>
                    <img src={logo} width={250} alt="" />
                    <h2 className='text-center text-white'>Gestión de productos</h2>
                </div>
                <div onClick={logOut} className='flex items-center gap-2 cursor-pointer hover:scale-110 transition'>
                    <button><SignOut size={40} color='white' /></button>
                    <h2 className='text-white text-xl'>Cerrar sesión</h2>
                </div>
            </aside>
            <main className="bg-gray-200 min-h-screen w-4/5 px-10 py-14">
                <h2 className='text-3xl'>Productos Cargados</h2>
            </main>
        </div>
    )
}
