import { useParams } from "react-router";
import HeaderAdmin from "../../components/HeaderAdmin";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ProductProps } from "../../config/definitions";

export default function EditProduct() {
    const [product, setProduct] = useState<ProductProps | undefined>()
    const {id} = useParams();
    console.log(id);
    const db = getFirestore();

    
    const fetchData = async () => {
        try {
            if (!id) {
                console.error("Error al actualizar datos");
            }else{
                const docRef = doc(db, "productos", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data() as ProductProps;
                    setProduct(data);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id])

    return (
        <div className="flex items-start flex-col xl:flex-row w-full" style={{ fontFamily: 'quador' }}>
            <HeaderAdmin />
            <main className="bg-gray-100  min-h-screen w-full flex items-center justify-center xl:w-5/6 px-5 xl:px-10 py-14">
            <div className="relative xl:w-4/6 md:w-3/4 w-full bg-gray-100 shadow-xl p-6">
                    <a href="/dashboard" className="absolute -top-8 left-2 text-xl cursor-pointer underline text-blue-800">Volver a Menú</a>
                    <div>
                        <h2 className="text-3xl text-blue-800 text-center font-semibold mb-5">Editar Producto</h2>
                        <hr className="border w-20 border-purplemain m-auto" />
                    </div>
                    <form action="" className="mt-5 flex flex-col gap-3">
                    <div className="w-full flex items-center gap-2 justify-around">
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="text-xl">Producto</label>
                                <input type="text" className="h-9 mt-1 rounded border border-blue-800 px-2 py-1" name="nombre" value={product?.prodName} />
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="text-xl">Precio</label>
                                <input type="number" className="h-9 mt-1 rounded border border-blue-800 px-2 py-1" name="price" value={product?.precio} />
                            </div>
                        </div>
                        <div className="w-full flex items-center gap-2 justify-around">
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="text-xl">Category</label>
                                <input type="text" className="h-9 mt-1 rounded border border-blue-800 px-2 py-1" name="category" />
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="text-xl">Descripcion</label>
                                <input type="text" className="h-9 mt-1 rounded border border-blue-800 px-2 py-1" name="img" value={product?.img} />
                            </div>
                        </div>
                        <div className="w-full flex items-center gap-8">
                            <div className="w-full flex flex-col">
                                <label htmlFor="" className="text-xl">Producto</label>
                                <textarea className="h-20 mt-1 resize-none rounded border border-blue-800 px-2 py-1" name="desc" value={product?.desc} />
                            </div>
                        </div>
                        <button type="submit" className="w-full mt-2 bg-blue-800 text-xl text-white py-2 rounded">Cargar</button>
                    </form>
                </div>
            </main>
        </div>
    )
}
