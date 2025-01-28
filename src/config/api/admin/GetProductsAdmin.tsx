import { app } from "../firebaseConfig";
import { getFirestore, getDocs, collection} from "firebase/firestore";
import { categoryProp, ProductProps } from "../../definitions";
import { useEffect, useState } from "react";
import Loader from "../../../components/ui/Loader";
import CardAdmin from "../../../components/CardAdmin";

export default function GetProducts({ categoryProp, search}: categoryProp) {

    const [products, setProducts] = useState<ProductProps[]>([]);
    const filteredCategory = products.filter(product => {
        if (search) {
            return product.prodName.toLowerCase().includes(search.toLowerCase());
        }
        if (categoryProp && categoryProp !== "Todas") {
            return product.categoria === categoryProp;
        }
        return true;
    });
    const [noProducts, setNoProducts] = useState(false)
    const db = getFirestore(app)

    const fetchData = async () => {
        try {
            const response = await getDocs(collection(db, 'productos'));
            const dataList = response.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as unknown as ProductProps[];
            setProducts(dataList);
        } catch (error) {
            console.error("Error: ", error);

        }
    }

    
    useEffect(() => {
        fetchData();
        const timer = setTimeout(() => {
            if (products.length === 0) {
                setNoProducts(true)
            }
        }, 5000);

        return () => clearTimeout(timer)
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            setNoProducts(false);
        }
    }, [products]);

    return (
        <div className="w-full min-h-96 mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  md:gap-1">
            {
                filteredCategory.length > 0 ? (
                    filteredCategory.map(product => (
                        <CardAdmin
                            key={product.id}
                            id={product.id}
                            desc={product.desc}
                            prodName={product.prodName}
                            img={product.img}
                            precio={product.precio}
                        />
                    ))
                ) : noProducts ? (
                    <div className="w-full text-center mt-10">
                        <p className="text-lg text-gray-500">No se encontraron productos.</p>
                    </div>
                ) : (
                    <div className="w-full flex justify-center items-center h-24 mt-10">
                        <Loader />
                    </div>
                )
            }
        </div>
    )
}

