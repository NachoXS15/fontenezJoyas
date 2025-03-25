import Layout from "../components/Layout";
import logo from '../assets/logo.png'
import Anillo from '../assets/anillo.jpg'
import ServicesInfo from "../config/ServicesInfo";
import banner from '../assets/banners/banner2.jpg'
import { useState } from "react";
import { selectedService } from "../config/definitions";
export default function Services() {

    const [selectedService, setSelectedService] = useState<selectedService>(ServicesInfo[0])

    const pickService = (service: selectedService) => {
        setSelectedService(service)
    }


    return (
        <Layout>
            <section className="w-full h-[650px] bg-cover bg-center" style={{ backgroundImage: `url(${Anillo})` }}>
                <div className="bg-purplemain w-full h-[650px] bg-cover bg-opacity-40 flex items-center justify-center ">
                    <img src={logo} width={300} alt="" />
                </div>
            </section>
            <main className="w-full h-96 mt-20 px-5 md:px-10">
                <div className="w-full h-full bg-slate-100 border border-gray-200" style={{fontFamily: 'garamond-premier-pro'}}>
                    <div className="w-full h-full flex flex-col items-center ">
                        <h2 className="px-5 py-2 bg-slate-100 rounded-lg w-fit text-center relative -top-5 text-purplemain text-3xl tracking-widest shadow-md">Nuestros Servicios</h2>
                        <div className="w-full h-full flex overflow-x-auto lg:overflow-x-hidden">
                            {   
                                ServicesInfo.map(service => (
                                    <div className="h-5/6 flex flex-col items-center justify-center gap-5 px-5 border-r-2 border-r-gray-200 hover:scale-105 transition hover:cursor-pointer" onClick={() => pickService(service)}>
                                        <h2 className="text-3xl text-white bg-purplemain w-fit px-3 py-2">{service.title}</h2>
                                        <p className="text-center text-xl">{service.desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
            <section className="w-full h-fit my-20 md:m-0 md:h-[600px] px-5 md:px-10 flex gap-10 items-center justify-center" style={{fontFamily: 'garamond-premier-pro'}}>
                <div className="hidden md:block w-full h-4/5 md:w-1/2 bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
                </div>
                <div className="w-full min-h-fit md:h-4/5 md:w-1/2 flex flex-col items-center md:items-end md:justify-center">
                    <h2 className="text-5xl text-white bg-purplemain text-center w-full md:w-fit px-14 py-2">{selectedService.title}</h2>
                    <p className="text-center md:text-end text-3xl px-2 md:px-0 mt-10">{selectedService.display}</p>
                </div>
            </section>
        </Layout>
    )
}
