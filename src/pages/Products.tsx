import Card from "../components/Card";
import Categories from "../components/Categories";
import Layout from "../components/Layout";
import { Cancel, Check } from "../components/ui/Icons";

export default function Products() {
  return (
    <Layout>
        <main className="max-w-full flex justify-center font-serif" style={{fontFamily: 'quador'}}>
            <Categories />
            <section className="w-full xl:w-9/12 flex items-start flex-col justify-center m-auto bg-slate-50 px-5 md:px-10 py-12">
                <div className="w-full flex items-center justify-between mb-10">
                  <h2 className="text-center pl-2 text-3xl font-bold text-blue-800">Nuestros Productos</h2>
                  <form className="flex items-center text-xl gap-2 text-purplemain">
                    <select name="" id="" className="w-28 border-2 border-purplemain rounded-full px-2 py-1 pr-2">
                      <option value="" className="">Filtros</option>
                      <option value="" className="">Menor a Mayor Precio</option>
                      <option value="" className="">Mayor a Menor Precio</option>
                      <option value="" className="">Filtros</option>
                    </select>
                    <button className="border-2 border-purplemain rounded-full hover:scale-105 transition"><Cancel size={20} color="#0f0e45" /></button>
                    <button className="border-2 border-purplemain rounded-full hover:scale-105 transition"><Check size={20} color="#0f0e45" /></button>
                  </form>
                </div>
                <hr className="border-2 border-purplemain w-20 m-auto" />
                <div className="w-full mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-1">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </main>
    </Layout>
  )
}
