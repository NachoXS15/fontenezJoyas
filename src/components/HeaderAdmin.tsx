import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { SignOut } from '../components/ui/Icons'
import { logOut } from '../config/api/authServices'
export default function HeaderAdmin() {
    return (
        <header className="bg-purplemain h-fit xl:min-h-screen xl:sticky top-0 w-full xl:w-1/6 px-5 py-10 xl:flex justify-between items-center xl:flex-col">
            <div className='hidden xl:block'>
                <NavLink to="/">
                    <img src={logo} width={250} alt="" />
                </NavLink>
                <h2 className='text-center text-white'>Gestión de productos</h2>
            </div>
            <div onClick={logOut} className='hidden xl:flex items-center gap-2 cursor-pointer hover:scale-110 transition'>
                <button><SignOut size={40} color='white' /></button>
                <h2 className='text-white text-md'>Cerrar sesión</h2>
            </div>
            <div className='flex xl:hidden items-center justify-around'>
                <h2 className='text-white text-center text-2xl'>Gestión de <br /> Productos</h2>
                <div className='flex items-center active:scale-110 transition' onClick={logOut}>
                    <button><SignOut size={40} color='white' /></button>
                    <h2 className='text-white text-xl'>Cerrar sesión</h2>
                </div>
            </div>
        </header>
    )
}
