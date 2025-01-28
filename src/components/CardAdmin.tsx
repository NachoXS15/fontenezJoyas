import { NavLink } from 'react-router'
import { ProductProps } from '../config/definitions'
import { Edit, Trash } from './ui/Icons'
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
export default function Card({ img, precio, prodName, id }: ProductProps) {

    const db = getFirestore();
    const deleteData = async () => {
        try {
            if (!id) {
                console.error("Error al eliminar");
            } else {
                await deleteDoc(doc(db, "productos", id));
                window.location.reload();
            }

        } catch (error) {
            console.error("Error: ", error);
        }
    }

    return (
        <div className="w-fit bg-slate-200 rounded-lg m-2 flex px-5 py-10 flex-col items-start justify-between gap-5 hover:shadow-sm hover:cursor-pointer transition" style={{ fontFamily: 'quador' }}>
            <img src={`/assets/products/${img}`} className='md:w-60 m-auto rounded-lg' alt="" />
            <div className="w-full flex flex-col">
                <h2 className="text-xl lg:text-2xl font-bold mt text-blue-800">{prodName}</h2>
                <h3 className="text-xl text-gray-400">${precio}</h3>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <NavLink to={`/producto/${id}`} className="rounded-full text-md text-white bg-blue-800 px-4 mt-2 py-1 w-fit">Ver Producto</NavLink>
                    <div className={`${window.location.pathname == "/dashboard" ? "flex gap-2 items-center" : "hidden"}`}>
                        <a href={`/dashboard/editProduct/${id}`} className='hover:scale-105 transition'><Edit /></a>
                        <button onClick={deleteData} className='hover:scale-105 transition'><Trash /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
