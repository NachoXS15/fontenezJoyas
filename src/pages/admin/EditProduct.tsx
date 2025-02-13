import { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { CategoriesA } from "../../config/Categories";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { ProductProps } from "../../config/definitions";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
    const [product, setProduct] = useState<ProductProps | undefined>();
    const { id } = useParams();
    const db = getFirestore();
    const navigate = useNavigate();
    
    const fetchData = async () => {
        try {
            if (!id) {
                console.error("Error al actualizar datos");
            } else {
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
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => {
            if (!prevProduct) return prevProduct;
            return {
                ...prevProduct,
                [name]: value,
            };
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
    
            const prodName = formData.get("prodName")?.toString() || "";
            const precio = formData.get("precio")?.toString() || "";
            const img = formData.get("img")?.toString() || "";
            const desc = formData.get("desc")?.toString() || "";
            const category = formData.get("categoria")?.toString() || "";
            
            try {
                if(!id){
                    console.error("Error");
                    return;
                }else{
                    const docRef = doc(db, "productos", id)
                    await updateDoc(docRef, {
                        prodName: prodName,
                        precio: Number(precio),
                        categoria: category,
                        desc: desc,
                        img: img,
                    })
                    console.log("creado: ", docRef.id);
                    navigate("/dashboard")

                }
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
                        <h2 className="text-3xl text-blue-800 text-center font-semibold mb-5">Editar Producto</h2>
                        <hr className="border w-20 border-purplemain m-auto" />
                    </div>
                    <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
                        <div className="w-full flex items-center gap-2 justify-around">
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="text-xl">Producto</label>
                                <input
                                    type="text"
                                    className="h-9 bg-gray-100 mt-1 rounded border border-blue-800 px-2 py-1"
                                    name="prodName"
                                    value={product?.prodName || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="text-xl">Precio</label>
                                <input
                                    type="number"
                                    className="h-9 bg-gray-100 mt-1 rounded border border-blue-800 px-2 py-1"
                                    name="precio"
                                    value={product?.precio || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="w-full flex items-center gap-2 justify-around">
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="text-xl">Category</label>
                                <select
                                    className="h-9 bg-gray-100 mt-1 rounded border border-blue-800 px-2 py-1"
                                    value={product?.categoria || ''}
                                    name="categoria"
                                    onChange={handleInputChange}
                                >
                                    <option value="" defaultChecked disabled>Seleccionar</option>
                                    {CategoriesA.map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="text-xl">Descripcion</label>
                                <input
                                    type="text"
                                    className="h-9 bg-gray-100 mt-1 rounded border border-blue-800 px-2 py-1"
                                    name="img"
                                    value={product?.img || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="w-full flex items-center gap-8">
                            <div className="w-full flex flex-col">
                                <label htmlFor="" className="text-xl">Producto</label>
                                <textarea
                                    className="h-20 mt-1 resize-none rounded border border-blue-800 px-2 py-1"
                                    name="desc"
                                    value={product?.desc || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full mt-2 bg-blue-800 text-xl text-white py-2 rounded">Actualizar</button>
                    </form>
                </div>
            </main>
        </div>
    );
}
