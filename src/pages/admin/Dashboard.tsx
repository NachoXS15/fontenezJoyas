import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/api/firebaseConfig'
import { NavLink, useNavigate } from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin'
import GetProductsAdmin from '../../config/api/admin/GetProductsAdmin'

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
            <HeaderAdmin />
            <main className="bg-gray-100 min-h-screen w-full flex justify-center">
                <div className=' xl:w-5/6 px-5 xl:px-8 py-14'>
                    <div className='flex items-center justify-between mb-5'>
                        <h2 className='text-3xl font-bold text-blue-800'>Productos Cargados</h2>
                        <NavLink to="/dashboard/addProduct" className='text-5xl text-blue-800 font-bold hover:scale-125 transition'>+</NavLink>
                    </div>
                    <GetProductsAdmin />
                </div>
            </main>
        </div>
    )
}
