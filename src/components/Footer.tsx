import { Instagram, Mail, Phone } from "../assets/Icons";
import logo from '../assets/iso_blanco.png'
export default function Footer() {
  return (
    <footer className="w-full h-72 text-white bg-purplemain flex items-center justify-around">
        <div className="flex flex-col gap-5">
            <h2 className="font-bold text-4xl">Contactos</h2>
            <nav className="text-xl flex flex-col gap-2 ">
                <div className="flex gap-2">
                    <Instagram />
                    <span>@fontenezjoyas_</span>
                </div>
                <div className="flex gap-2">
                    <Mail />
                    <span>fontenzjoyas@gmail.com</span>
                </div>
                <div className="flex gap-2">
                    <Phone />
                    <span>+54 9 3804-360110</span>
                </div>
            </nav>
        </div>
        <img src={logo} width={100} alt="" />
    </footer>
  )
}
