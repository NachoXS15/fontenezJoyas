import Layout from "../components/Layout";
import img from '../assets/anillo.jpg'
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import { useEffect } from "react";
export default function SingleProduct() {
  useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);
  return (
    <Layout>
      <div className="w-full lg:w-5/6 my-10 lg:px-24 md:my-14 h-fit m-auto flex flex-col md:flex-row items-center justify-center gap-10" style={{fontFamily: 'quador'}}>
        <div className="w-10/12 md:w-2/6 h-96 bg-cover bg-center bg-slate-700 rounded" style={{backgroundImage: `url(${img})`}}>
          
        </div>
        <div className="w-10/12 md:w-1/2 flex flex-col gap-5">
            <h2 className="text-5xl font-bold text-blue-800">Anillo</h2>
            <p className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, officia quis ratione culpa dolore cupiditate, praesentium incidunt ab aperiam, asperiores exercitationem rerum illum repellat dolores ex nostrum veniam labore obcaecati.</p>
            <p className="text-2xl text-purplemain font-medium">$100000</p>
            <div className="">
              <NavLink to="/" className="bg-blue-800 mr-2 mt-5 md:mt-10 rounded-full border w-fit px-5 py-2 text-white text-xl transition hover:bg-white hover:border-blue-800 hover:text-blue-800">Comprar</NavLink>
              <NavLink to="/" className="border border-blue-800 mt-5 md:mt-10 rounded-full w-fit px-5 py-2 text-blue-800 text-xl hover:bg-blue-800 hover:text-white transition">Añadir al carrito</NavLink>
            </div>
        </div>
      </div>
      <hr className="border-2 m-auto border-purplemain w-32" />
      <div className="w-full lg:w-4/6 m-auto my-5 px-5" style={{fontFamily: 'quador'}}>
        <h2 className="text-center text-blue-800 font-semibold text-3xl mb-2">Productos relacionados</h2>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-1">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  )
}