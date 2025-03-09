import Layout from "../components/Layout";
import logo from '../assets/logo.png'
import Anillo from '../assets/anillo.jpg'
import ServicesInfo from "../config/ServicesInfo";

export default function Services() {
  return (
    <Layout>
        <section className="hidden w-full h-[600px] md:flex gap-3 md:my-5 px-10">
            <div className="w-4/6 bg-center bg-cover bg-slate-500" style={{backgroundImage: `url(${Anillo})`}}></div>
            <div className="w-2/6 bg-purplemain flex items-center justify-center">
            <img src={logo} width={350} alt="" />
            </div>
        </section>
        <section id="banner" className="w-full relative md:hidden h-[650px] flex flex-col-reverse text-white justify-center items-center md:flex-row">
            <div className="w-[55%] md:mt-[476px] z-50 h-full flex justify-center items-center  md:items-start flex-col text-center">
                <div className="flex justify-start absolute md:static items-start font-semibold font-poppins">
                    <img src={logo} width={300} alt="" />
                </div>
            </div>
            <div id="profile" style={{ backgroundImage: `url(${Anillo})` }} className="w-full h-full absolute md:bg-local md:static md:w-[45%] md:h-[650px] bg-opacity-15 bg-center bg-cover">
                <div className="bg-purplemain w-full h-full bg-cover bg-opacity-40 absolute"></div>
            </div>
        </section>
        <main className="w-full h-96 mt-20 mb-10 px-10">
            <div className="w-full h-full bg-slate-100  border border-gray-200 " style={{fontFamily: 'Quador'}}>
                <div className="w-full h-full flex flex-col items-center ">
                    <h2 className="px-5 py-2 bg-slate-100 rounded-lg w-fit text-center relative -top-5 text-purplemain text-3xl tracking-widest shadow-md">Nuestros Servicios</h2>
                    <div className="w-full h-full flex">
                        {   
                            ServicesInfo.map(service => (
                                <div className="h-5/6 flex flex-col items-center justify-center gap-5 px-5 border-r-2 border-r-gray-200 hover:scale-105 transition">
                                    <h2 className="text-2xl text-white bg-purplemain w-fit px-3 py-2">{service.title}</h2>
                                    <p className="text-center">{service.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
        <section className="w-full h-96 px-20 mt-10 flex gap-10 items-center justify-center">
            <div className="w-full h-4/5 md:w-1/2 bg-slate-200">
                        
            </div>
            <div className="w-full h-4/5 md:w-1/2 flex flex-col items-end bg-slate-200">
                <h2 className="text-3xl text-white bg-purplemain w-fit px-14 py-2">Limpieza</h2>
                <p className="text-end text-xl">Eliminamos impurezas, manchas y desgaste acumulado para devolverle a tus joyas el brillo original y apariencias impecable</p>
            </div>
        </section>
    </Layout>
  )
}
