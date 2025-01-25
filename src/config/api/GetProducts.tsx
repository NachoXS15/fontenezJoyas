import { app } from "../api/firebaseConfig";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { ProductProps } from "../definitions";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

export default function GetProducts() {

    const [products, setProducts] = useState<ProductProps[]>([])
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
        <div className="w-full mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  md:gap-1">
            {
                products.map(product => (
                    <Card id={product.id} desc={product.desc} prodName={product.prodName} img={product.img} precio={product.precio} />
                ))
            }
        </div>
    )
}
