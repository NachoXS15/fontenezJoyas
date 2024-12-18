import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CloseIcon, MenuIcon } from "./ui/Icons";
import logo from '../assets/iso_blanco.png'

export default function Header() {
    const [isClick, setIsClick] = useState(false);
    const toggleNavBar = () => {
        setIsClick(!isClick)
    }
    return (
        <>
            <header className='bg-purplemain text-white flex justify-between items-center py-9 px-20 md:py-4 md:px-7 md:justify-around select-none drop-shadow-sm'>
                <NavLink to="/">
                    <img src={logo} className="w-14 md:w-10" alt="" />
                </NavLink>
                <nav className='hidden md:flex justify-center items-center gap-10'>
                    <NavLink className="mx-5 text-lg text-bluemain md:hover:scale-105 transition" style={{ fontFamily: 'Mundial' }} to="/productos">Productos</NavLink>
                    <NavLink className="mx-5 text-lg text-bluemain md:hover:scale-105 transition" style={{ fontFamily: 'Mundial' }} to="/about">Nosotros</NavLink>
                    <form action="">
                        <input type="text" className="h-7 rounded-full px-5" placeholder="Buscar..." />
                    </form>
                </nav>
                <div className='md:hidden flex items-center justify-center' onClick={toggleNavBar}>
                    {isClick ? <CloseIcon /> : <MenuIcon />}
                </div>
            </header>
            {isClick && (
                <div className='md:hidden bg-slate-200 h-fit py-9 bottom-0'>
                    <hr className='w-3/5 m-auto border border-purplemain' />
                    <div className='flex flex-col mt-3'>
                        <NavLink className="hover:scale-105 transition my-2 mx-9 text-2xl text-purplemain" style={{ fontFamily: 'Mundial' }} to="/paquetes">Productos</NavLink>
                        <NavLink className="hover:scale-105 transition my-2 mx-9 text-2xl text-purplemain" style={{ fontFamily: 'Mundial' }} to="/testimonies">Nosotros</NavLink>
                    </div>
                </div>
            )}
        </>

    )
}

