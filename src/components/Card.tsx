import img from '../assets/anillo.jpg'

export default function Card() {
    return (
        <div className="w-fit bg-slate-100 rounded-lg flex px-5 py-10 flex-col items-start justify-between gap-5 hover:scale-105 hover:shadow-sm hover:cursor-pointer transition">
            <img src={img} className='w-60' alt="" />
            <div className="flex flex-col">
                <h2 className="md:text-xl lg:text-2xl font-bold text-blue-800">Anillo</h2>
                <h4 className="text-md text-gray-400">anillo todo fachero zarpado nazi</h4>
                <h3 className="text-xl text-gray-400">$100000</h3>
            </div>
        </div>
    )
}
