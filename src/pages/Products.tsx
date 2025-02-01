import { useParams } from "react-router";
import Layout from "../components/Layout";
import GetProducts from "../config/api/GetProducts";
import { CategoriesA } from "../config/Categories";
import { useState } from "react";


export default function Products() {
  const [categorySelected, setCategorySelected] = useState<string>("")
  let { id } = useParams();
  console.log(id);

  const handleCategory = (c: string) => {
      setCategorySelected(c);
      id = "";
  }

  return (
    <Layout>
      <main className="max-w-full flex justify-center font-serif" style={{ fontFamily: 'quador' }}>
        <aside className="hidden xl:block xl:w-fit lg:px-10 bg-slate-200 px-10 py-14" style={{ fontFamily: 'quador' }}>
          <div className="flex gap-2 flex-col items-start">
            <h2 className="text-3xl text-blue-800 font-bold uppercase">Joyas</h2>
            <div className="flex flex-col items-start">
              {
                CategoriesA.slice(0, 4).map((cat, i) => (
                  <button key={i} onClick={() => handleCategory(cat)} className="text-xl text-gray-400 hover:underline hover:text-gray-800">{cat}</button>
                ))
              }
            </div>
          </div>
          <div className="flex gap-2 flex-col items-start mt-10">
            <h2 className="text-3xl text-blue-800 font-bold uppercase">Artesanias</h2>
            <div className="flex flex-col items-start">
              {
                CategoriesA.slice(4).map((cat, i) => (
                  <button key={i} onClick={() => handleCategory(cat)} className="text-xl text-gray-400 hover:underline hover:text-gray-800">{cat}</button>
                ))
              }
            </div>
          </div>
        </aside>
        <section className="w-full  xl:w-9/12 flex items-start flex-col justify-center m-auto bg-slate-50 px-2 md:px-10 py-12">
          <div className="w-full flex items-center justify-between mb-10">
            <h2 className="text-center pl-2 text-3xl font-bold text-blue-800">Nuestros Productos</h2>
            {/* <form className="flex items-center text-xl gap-2 text-purplemain">
              <select name="" id="" className="w-28 border-2 border-purplemain rounded-full px-2 py-1 pr-2">
                <option value="" className="">Filtros</option>
                <option value="" className="">Menor a Mayor Precio</option>
                <option value="" className="">Mayor a Menor Precio</option>
                <option value="" className="">Filtros</option>
              </select>
              <button className="border-2 border-purplemain rounded-full hover:scale-105 transition"><Cancel size={20} color="#0f0e45" /></button>
              <button className="border-2 border-purplemain rounded-full hover:scale-105 transition"><Check size={20} color="#0f0e45" /></button>
            </form> */}
          </div>
          <hr className="border-2 border-purplemain w-20 ml-2" />
          <GetProducts search={id || ""} categoryProp={categorySelected} />
        </section>
      </main>
    </Layout>
  )
}
