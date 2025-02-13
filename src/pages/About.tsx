import Layout from "../components/Layout";
import bannerImg from '../assets/banners/banner1.jpg'
import bannerImg2 from '../assets/banners/banner3.jpg'
import bannerImg3 from '../assets/banners/banner4.jpg'

import bannerImg7 from '../assets/banners/banner7.jpg'
import Pedro from '../assets/banners/banner6.jpg'
export default function About() {
    return (
        <Layout>
            <section className="w-full h-[450px] flex flex-col md:flex-row gap-5 py-5 px-3 md:px-10">
                <div className="w-full md:w-2/5 h-full flex flex-row md:flex-col gap-2">
                    <div className="h-full md:h-1/2 w-full flex gap-2">
                        <div className="w-1/2 h-full bg-center bg-cover" style={{ backgroundImage: `url(${bannerImg})` }}></div>
                        <div className="w-1/2 h-full bg-center bg-cover" style={{ backgroundImage: `url(${bannerImg3})` }}></div>
                    </div>
                    <div className="md:h-1/2 h-full w-full bg-center bg-cover" style={{ backgroundImage: `url(${bannerImg2})` }}></div>
                </div>
                <div className="w-full h-full md:w-3/5 bg-center bg-cover" style={{ backgroundImage: `url(${bannerImg2})` }}></div>
            </section>
            <section className="w-full pt-20 flex items-center flex-col justify-center" style={{ fontFamily: 'quador' }}>
                <h2 className="text-4xl md:text-5xl text-center text-blue-800 font-semibold tracking-wider">Nuestra Historia</h2>
                <hr className="w-72 my-2 border border-blue-700 " />
                <p className="text-2xl text-blue-800 tracking-wider">Conocé un poco más</p>
            </section>
            <section className="w-full h-fit pb-10 px-3 lg:px-24 bg-purplemain flex flex-col items-center justify-center" style={{ fontFamily: 'quador', clipPath: 'polygon(50% 10%, 100% 0, 100% 100%, 0 100%, 0 0)' }}
            >
                <p className="text-white text-xl lg:text-2xl text-center mt-44">Fonteñez Joyas es una empresa familiar, fundada por Pedro Fonteñez, comenzó abriendo un taller de orfebrería en el año 1924.
                    Un hombre apasionado del arte, y del trabajo, que pudo inculcar ese amor por la platería a sus hijos.</p>
                <hr className="w-40 border my-10 border-white px-12" />
                <div className="w-full h-[600px] px-2 flex gap-3" >
                    <div className="w-1/2 h-full">
                        <h2 className="text-white h-1/4 sm:text-md md:text-xl">En la línea generacional, es Domingo Fonteñez quien continúa con su oficio, honrando el trabajo de su padre.</h2>
                        <div className="w-full h-3/4 bg-center bg-cover" style={{ backgroundImage: `url(${bannerImg})` }}></div>
                    </div>
                    <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${Pedro})` }}>
                    </div>
                </div>
                <div className="w-full px-2 mt-10 bg-purplemain">
                    <div className="w-full h-96 flex px-6 md:px-20 items-center justify-center bg-center bg-cover" style={{ fontFamily: 'quador', backgroundImage: `url(${bannerImg7})` }}>
                        <h2 className="text-white text-xl md:text-3xl text-center">El mismo enseña a su hijo Pedro, el cual sigue sus pasos creando, innovando, y trabajando con pasión y dedicación para continuar esa línea de plateros-orfebres</h2>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
