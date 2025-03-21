import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CloseIcon, MenuIcon, Search } from "./ui/Icons";
import logo from '../assets/iso_blanco.png'

export default function Header() {
    const [isClick, setIsClick] = useState(false);
    const navigate = useNavigate();
    const toggleNavBar = () => {
        setIsClick(!isClick)
    } 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchField = formData.get("search")?.toString() || "";

        navigate(`/productos/${searchField}`)
    }

    return (
        <>
            <header className='bg-purplemain text-white flex justify-between items-center py-6 px-12 md:py-4 md:px-7 md:justify-around select-none drop-shadow-sm' style={{fontFamily: 'quador'}}>
                <NavLink to="/">
                    <img src={logo} className="w-14 md:w-10 hover:scale-105 transition" alt="" />
                </NavLink>
                <nav className='hidden md:flex justify-center items-center gap-10'>
                    <NavLink className="mx-5 text-lg text-bluemain md:hover:scale-105 transition" style={{ fontFamily: 'Mundial' }} to="/servicios">Servicios</NavLink>
                    <NavLink className="mx-5 text-lg text-bluemain md:hover:scale-105 transition" style={{ fontFamily: 'Mundial' }} to="/productos">Productos</NavLink>
                    <NavLink className="mx-5 text-lg text-bluemain md:hover:scale-105 transition" style={{ fontFamily: 'Mundial' }} to="/about">Nosotros</NavLink>
                    <form action="" onSubmit={handleSubmit} className="flex items-center gap-2">
                        <input type="text" name="search" className="h-7 rounded-full pb-1 px-5 text-gray-700 active:outline-none" placeholder="Buscar..." />
                        <button type="submit"><Search color="white" size={24}/></button>
                    </form>
                </nav>
                <div className='md:hidden flex items-center justify-center' onClick={toggleNavBar}>
                    {isClick ? <CloseIcon /> : <MenuIcon />}
                </div>
            </header>
            {isClick && (
                <div className='md:hidden bg-slate-200 h-fit py-9 bottom-0'>
                    <hr className='w-4/5 m-auto border border-purplemain' />
                    <div className='flex flex-col mt-3 px-10' style={{fontFamily: 'quador'}}>
                        <NavLink className="mx-5 text-lg text-bluemain md:hover:scale-105 transition" style={{ fontFamily: 'Mundial' }} to="/servicios">Servicios</NavLink>
                        <NavLink className="hover:scale-105 transition my-2 mx-2 text-xl text-purplemain" to="/productos">Productos</NavLink>
                        <NavLink className="hover:scale-105 transition my-2 mx-2 text-xl text-purplemain" to="/about">Nosotros</NavLink>
                        <form action="" onSubmit={handleSubmit} className="w-full mt-2 flex items-center gap-2">
                            <input type="text" name="search" className="w-full h-7 pb-1 rounded-full px-5 border border-blue-800 text-gray-700 active:outline-none" placeholder="Buscar..." />
                            <button type="submit"><Search color="#1e40af" size={24}/></button>
                        </form>
                    </div>
                </div>
            )}
        </>

    )
}

