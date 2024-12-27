import { NavLink } from 'react-router'
import img from '../assets/anillo.jpg'

export default function Card() {
    return (
        <div className="w-full md:w-full lg:w-fit bg-slate-200 rounded-lg my-2 py-3 px-2 md:px-4 md:py-9 flex flex-row md:flex-col md:items-start md:justify-between items-center gap-4 md:gap-5 md:hover:scale-105 md:hover:shadow-sm md:hover:cursor-pointer transition">
            <img src={img} className='w-40 md:w-60 m-auto' alt="" />
            <div className="flex flex-col">
                <h2 className="text-3xl md:text-2xl font-bold text-blue-800">Anillo</h2>
                <h4 className="text-md text-wrap text-gray-400">anillo todo fachero zarpado nazi</h4>
                <h3 className="text-2xl text-gray-400">$100000</h3>
                <NavLink to="/producto" className='bg-blue-800 w-fit mt-5 text-white rounded-full px-5 py-1 hover:bg-white hover:text-blue-800'>Ver más</NavLink>
            </div>
        </div>
    )
}
