import Layout from "../components/Layout";
import img from '../assets/anillo.jpg'
import { NavLink } from "react-router-dom";
export default function SingleProduct() {
  return (
    <Layout>
      <div className="w-full md:w-1/2 my-5 md:my-20 h-fit m-auto flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-10/12 md:w-1/2 h-96 bg-cover bg-center bg-slate-700 rounded" style={{backgroundImage: `url(${img})`}}>
          
        </div>
        <div className="w-10/12 md:w-1/2 flex flex-col gap-5">
            <h2 className="text-5xl font-bold text-purplemain">Anillo</h2>
            <p className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, officia quis ratione culpa dolore cupiditate, praesentium incidunt ab aperiam, asperiores exercitationem rerum illum repellat dolores ex nostrum veniam labore obcaecati.</p>
            <NavLink to="/" className="bg-purplemain mt-5 md:mt-10 rounded-full w-fit px-5 py-2 text-white text-xl">Volver a inicio</NavLink>
        </div>
      </div>
    </Layout>
  )
}