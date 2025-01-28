import { NavLink } from 'react-router'
import { ProductProps } from '../config/definitions'
import { Edit, Trash } from './ui/Icons'
export default function Card({img, precio, prodName, desc, id}: ProductProps) {
    return (
        <NavLink to={`/producto/${id}`} className="w-fit bg-slate-200 rounded-lg m-2 flex px-5 py-10 flex-col items-start justify-between gap-5 hover:scale-105 hover:shadow-sm hover:cursor-pointer transition" style={{fontFamily: 'quador'}}>
            <img src={`/assets/products/${img}`} className='md:w-60 m-auto rounded-lg' alt="" />
            <div className="flex flex-col">
                <h2 className="text-xl lg:text-2xl font-bold text-blue-800">{prodName}</h2>
                <h4 className="text-md text-gray-400 mt-2">{desc}</h4>
                <h3 className="text-xl text-gray-400">${precio}</h3>
                <div className='mt-2 flex justify-between'>
                    <NavLink to={`/producto/${id}`} className="rounded-full text-white bg-blue-800 px-5 mt-2 py-1 w-fit">Ver Más</NavLink>
                    <div className={`${window.location.pathname == "/dashboard" ? "flex gap-2" : "hidden"}`}>
                        <a href={`/dashboard/editProduct/${id}`}><Edit /></a>
                        <button><Trash /></button>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}
