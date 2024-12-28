import { CategoriesArt, CategoriesJoyas } from "../config/Categories";

export default function Categories() {
    return (
        <>
            <aside className="hidden xl:block xl:w-fit lg:px-10 bg-slate-200 px-10 py-14" style={{fontFamily: 'quador'}}>
                <div className="flex gap-2 flex-col">
                    <h2 className="text-3xl text-blue-800 font-bold uppercase">Joyas</h2>
                    <div className="flex flex-col">
                        {
                            CategoriesJoyas.map(cat => (
                                <a href="" className="text-xl text-gray-400 hover:underline hover:text-gray-800">{cat}</a>
                            ))
                        }
                    </div>
                </div>
                <div className="flex gap-2 flex-col mt-10">
                    <h2 className="text-3xl text-blue-800 font-bold uppercase">Artesanias</h2>
                    <div className="flex flex-col">
                        {
                            CategoriesArt.map(cat => (
                                <a href="" className="text-xl text-gray-400 hover:underline hover:text-gray-800">{cat}</a>
                            ))
                        }
                    </div>
                </div>
            </aside>
        </>
    )
}
