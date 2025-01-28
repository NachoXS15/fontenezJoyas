import HeaderAdmin from "../../components/HeaderAdmin";


export default function AddProduct() {
    return (
        <div className="flex items-start flex-col xl:flex-row w-full" style={{ fontFamily: 'quador' }}>
            <HeaderAdmin />
            <main className="bg-gray-100 min-h-screen w-full flex items-center justify-center xl:w-5/6 px-5 xl:px-10 py-14">
                <div className="xl:w-4/6 md:w-3/4 w-full bg-slate-200 p-6">
                    <h2 className="text-3xl text-purplemain text-center font-medium ">Carga de Productos</h2>
                    <form action="" className="mt-5 flex flex-col gap-3">
                        <div className="w-full flex items-center gap-1 justify-around">
                            <div className="w-1/3 flex flex-col">
                                <label htmlFor="" className="text-xl">Producto</label>
                                <input type="text" className="h-9 mt-1  rounded px-2 py-1" name="nombre" />
                            </div>
                            <div className="w-1/3 flex flex-col">
                                <label htmlFor="" className="text-xl">Precio</label>
                                <input type="number" className="h-9 mt-1  rounded px-2 py-1" name="nombre" />
                            </div>
                            <div className="w-1/3 flex flex-col">
                                <label htmlFor="" className="text-xl">Descripcion</label>
                                <input type="text" className="h-9 mt-1  rounded px-2 py-1" name="nombre" />
                            </div>
                        </div>
                        <div className="w-full flex items-center gap-8">
                            <div className="w-full flex flex-col">
                                <label htmlFor="" className="text-xl">Producto</label>
                                <textarea className="h-20 mt-1 resize-none rounded px-2 py-1" name="nombre" />
                            </div>
                        </div>
                        <button type="submit" className="w-full mt-2 bg-purplemain text-white py-2 rounded">Cargar</button>
                    </form>
                </div>
            </main>
        </div>
    )
}
