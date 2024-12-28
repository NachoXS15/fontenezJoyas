import { NavLink } from "react-router";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
        <div className="min-h-screen flex flex-col items-center gap-10 justify-center" style={{fontFamily: 'quador'}}>
            <h2 className="text-9xl text-purple-900 font-bold">:(</h2>
            <p className="text-5xl text-purplemain">¡Página en desarrollo!</p>
            <NavLink to="/" className="bg-purplemain rounded-full w-fit px-5 py-2 text-white text-3xl">Volver a inicio</NavLink>
        </div>
    </Layout>
  )
}
