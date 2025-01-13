import { useEffect } from 'react'
import logo from '../../assets/logo.png'
import { SignOut } from '../../components/ui/Icons'
import { logOut } from '../../config/api/authServices'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/api/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card'
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
        <div className="flex items-start flex-col xl:flex-row w-full" style={{ fontFamily: 'quador' }}>
            <header className="bg-purplemain h-fit xl:min-h-screen xl:sticky top-0 w-full xl:w-1/6 py-10 xl:flex justify-between items-center xl:flex-col">
                <div className='hidden xl:blck'>
                    <img src={logo} width={250} alt="" />
                    <h2 className='text-center text-white'>Gestión de productos</h2>
                </div>
                <div onClick={logOut} className='hidden xl:flex items-center gap-2 cursor-pointer hover:scale-110 transition'>
                    <button><SignOut size={40} color='white' /></button>
                    <h2 className='text-white text-xl'>Cerrar sesión</h2>
                </div>
                <div className='flex xl:hidden items-center justify-around'>
                    <h2 className='text-white text-center text-2xl'>Gestión de <br /> Productos</h2>
                    <div className='flex items-center active:scale-110 transition' onClick={logOut}>
                        <button><SignOut size={40} color='white' /></button>
                        <h2 className='text-white text-xl'>Cerrar sesión</h2>
                    </div>
                </div>
            </header>
            <main className="bg-gray-100 min-h-screen w-full xl:w-5/6 px-5 xl:px-10 py-14">
                <div className='flex items-center justify-between mb-5'>
                    <h2 className='text-3xl font-bold text-blue-800'>Productos Cargados</h2>
                    <button className='text-4xl text-blue-800 font-bold hover:scale-125 transition'>+</button>
                </div>
                <div className='grid justify-between grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-auto-flow '>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        </div>
    )
}
