import { addDoc, collection, getFirestore } from "firebase/firestore";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useNavigate } from "react-router";
import { CategoriesA } from "../../config/Categories";

export default function AddProduct() {
    const navigate = useNavigate();
    const db = getFirestore();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const prodName = formData.get("nombre")?.toString()
        const price = formData.get("price")?.toString()
        const img = formData.get("img")?.toString()
        const desc = formData.get("desc")?.toString()
        const category = formData.get("category")?.toString()
        
        try {
            const docRef = await addDoc(collection(db, "productos"), {
                prodName: prodName,
                price: Number(price),
                categoria: category,
                desc: desc,
                img: img,
            })
            console.log("creado: ", docRef.id);
            navigate("/dashboard")
        } catch (error) {
            console.log("error: ", error);
        }
    }
    return (
        <div className="flex items-start flex-col xl:flex-row w-full" style={{ fontFamily: 'quador' }}>
            <HeaderAdmin />
            <main className="bg-gray-100 min-h-screen w-full flex items-center justify-center xl:w-5/6 px-5 xl:px-10 py-14">
                <div className="relative xl:w-4/6 md:w-3/4 w-full bg-gray-100 shadow-xl p-6">
                    <a href="/dashboard" className="absolute -top-8 left-2 text-xl cursor-pointer underline text-blue-800">Volver a Menú</a>
                    <div>
                        <h2 className="text-3xl text-blue-800 text-center font-semibold mb-5">Carga de Productos</h2>
                        <hr className="border w-20 border-purplemain m-auto" />
                    </div>
                    <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
                        <div className="w-full flex items-center gap-2 justify-around">
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="text-xl">Producto</label>
                                <input type="text" className="h-9 bg-gray-100  mt-1 rounded border border-blue-800 px-2 py-1" name="nombre" />
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="text-xl">Precio</label>
                                <input type="number" className="h-9 bg-gray-100  mt-1 rounded border border-blue-800 px-2 py-1" name="price" />
                            </div>
                        </div>
                        <div className="w-full flex items-center gap-2 justify-around">
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="text-xl">Categoria</label>
                                <select className="h-9 bg-gray-100  mt-1 rounded border border-blue-800 px-2 py-1" name="category">
                                    <option value="" defaultChecked disabled>Seleccionar</option>
                                    {
                                        CategoriesA.map(cat => (
                                            <option value={cat}>{cat}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="text-xl">Imagen</label>
                                <input type="text" className="h-9 bg-gray-100  mt-1 rounded border border-blue-800 px-2 py-1" name="img" />
                            </div>
                        </div>
                        <div className="w-full flex items-center gap-8">
                            <div className="w-full flex flex-col">
                                <label htmlFor="" className="text-xl">Descripción</label>
                                <textarea className="h-20 mt-1 bg-gray-100  resize-none rounded border border-blue-800 px-2 py-1" name="desc" />
                            </div>
                        </div>
                        <button type="submit" className="w-full mt-2 bg-blue-800 text-xl text-white py-2 rounded">Cargar</button>
                    </form>
                </div>
            </main>
        </div>
    )
}
