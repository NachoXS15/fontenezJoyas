
export default function Categories() {
    return (
        <>
            <aside className="w-fit lg:px-10 bg-slate-200 px-10 py-14">
                <div className="flex gap-2 flex-col">
                    <h2 className="text-3xl text-blue-800 font-bold uppercase">Joyas</h2>
                    <div className="flex flex-col">
                        <a href="" className="text-xl text-gray-400 hover:underline hover:text-gray-800">Anillos</a>
                        <a href="" className="text-xl text-gray-400 hover:underline hover:text-gray-800">Aros</a>
                        <a href="" className="text-xl text-gray-400 hover:underline hover:text-gray-800">Collares</a>
                        <a href="" className="text-xl text-gray-400 hover:underline hover:text-gray-800">Pulseras</a>
                    </div>
                </div>
                <div className="flex gap-2 flex-col mt-10">
                    <h2 className="text-4xl text-blue-800 font-bold uppercase">Artesanias</h2>
                    <div className="flex flex-col">
                        <a className="text-2xl text-gray-400 hover:underline hover:text-gray-800">Cubiertos</a>
                        <a className="text-2xl text-gray-400 hover:underline hover:text-gray-800">Mates</a>
                    </div>
                </div>
            </aside>
        </>
    )
}
