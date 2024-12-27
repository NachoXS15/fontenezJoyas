import { Instagram, Mail, Phone } from "./ui/Icons";
import logo from '../assets/iso_blanco.png'
export default function Footer() {
    return (
        <>
            <footer className='w-full h-fit bg-purplemain flex flex-col justify-center md:items-start px-10 md:px-36 md:pt-10'>
                <div className='w-full md:flex flex-row justify-center gap-x-6 items-center'>
                    <div className="w-full mt-10 md:hidden flex justify-center md:justify-center">
                        <img src={logo} alt="Logo" className="w-20 md:w-24" />
                    </div>
                    <hr className='w-4/5 border m-auto my-8 md:5 bg-white text-white text-center md:hidden' />
                    <div className='w-full md:flex flex-col text-white md:border-r-2 md:border-white'>
                        <h2 className='text-3xl mb-5'>Contacto</h2>
                        <nav className='flex flex-col gap-3 md:gap-4'>
                            <div className="flex gap-2">
                                <Instagram />
                                <span>@fontenezjoyas_</span>
                            </div>
                            <div className="flex gap-2">
                                <Mail color="yellow" size={32} />
                                <span>fontenzjoyas@gmail.com</span>
                            </div>
                            <div className="flex gap-2">
                                <Phone />
                                <span>+54 9 3804-360110</span>
                            </div>
                        </nav>
                    </div>
                    <div className="w-full h-fit mt-10 md:m-0 hidden md:flex justify-center md:justify-center md:border-r-2 md:border-white">
                        <img src={logo} alt="Logo" className="w-20 md:w-36" />
                    </div>
                    <hr className='w-4/5 border m-auto my-8 md:my-5 bg-white text-white text-center md:hidden' />
                    <div className='w-full flex flex-col  text-white'>
                        <h2 className='text-3xl'>Ubicación</h2>
                        <p className="mb-2">Encuentranos aquí</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.6528287105516!2d-66.8575014238112!3d-29.409710475249334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427da4b4631d64b%3A0x671f60bd25b7a507!2sFonte%20ez%20Joyas%20-%20Plateros%20-%20Orfebres%20Joyeria%20Y%20Relojeria!5e0!3m2!1ses-419!2sar!4v1734571222183!5m2!1ses-419!2sar" style={{ border: 0 }} className="" allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
                <div className='w-full text-center bg-bluesec mt-10'>
                    <hr className='w-4/5 m-auto border bg-white text-white text-center' />
                    <div className='w-4/5 m-auto'>
                        <p className='text-white text-center text-md py-4 font-medium'>Copyright © 2024 <strong>Fonteñez Joyas</strong> | Todos los derechos reservados</p>
                    </div>
                </div>
            </footer>
        </>
    )
}