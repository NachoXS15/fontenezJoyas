import Layout from "../components/Layout";
import img from '../assets/anillo.jpg'
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
export default function SingleProduct() {
  return (
    <Layout>
      <div className="w-full lg:w-5/6 my-10 md:px-10 md:my-14 h-fit m-auto flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-10/12 md:w-2/6 h-96 bg-cover bg-center bg-slate-700 rounded" style={{backgroundImage: `url(${img})`}}>
          
        </div>
        <div className="w-10/12 md:w-1/2 flex flex-col gap-5">
            <h2 className="text-5xl font-bold text-purplemain">Anillo</h2>
            <p className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, officia quis ratione culpa dolore cupiditate, praesentium incidunt ab aperiam, asperiores exercitationem rerum illum repellat dolores ex nostrum veniam labore obcaecati.</p>
            <div className="">
              <NavLink to="/" className="bg-purplemain mr-2 mt-5 md:mt-10 rounded-full w-fit px-5 py-2 text-white text-xl">Comprar</NavLink>
              <NavLink to="/" className="border border-purplemain mt-5 md:mt-10 rounded-full w-fit px-5 py-2 text-purplemain text-xl">Añadir al carrito</NavLink>

            </div>
        </div>
      </div>
      <hr className="border-2 m-auto border-purplemain w-32" />
      <div className="w-full lg:w-4/6 m-auto my-5 px-5">
        <h2 className="text-center text-purplemain font-semibold text-3xl mb-2">Productos relacionados</h2>
        <div className="w-full  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-1">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  )
}