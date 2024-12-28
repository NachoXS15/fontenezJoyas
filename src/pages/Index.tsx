import Layout from "../components/Layout";
import logo from '../assets/logo.png'
import bannerImg from '../assets/banner_img.jpg'
export default function Index() {
  return (
    <Layout>
      <div className="hidden w-full h-[600px] md:flex gap-3 md:mt-5 px-10">
        <div className="w-4/6 bg-center bg-cover bg-slate-500" style={{backgroundImage: `url(${bannerImg})`}}></div>
        <div className="w-2/6 bg-purplemain flex items-center justify-center">
          <img src={logo} width={500} alt="" />
        </div>
      </div>
      <section id="banner" className="w-full relative md:hidden h-[650px] flex flex-col-reverse text-white justify-center items-center md:flex-row">
        <div className="w-[55%] md:mt-[476px] z-50 h-full flex justify-center items-center  md:items-start flex-col text-center">
          <div className="flex justify-start absolute md:static items-start font-semibold font-poppins">
            <img src={logo} width={400} alt="" />
          </div>
          
        </div>
        <div
          id="profile"
          style={{ backgroundImage: `url(${bannerImg})` }}
          className="w-full h-full absolute md:bg-local md:static md:w-[45%] md:h-[650px] bg-opacity-15 bg-center bg-cover"
        >
          <div className="bg-purplemain w-full h-full bg-cover bg-opacity-40 absolute"></div>
        </div>
      </section>
      <div className="w-full h-96 bg-white px-5">
        <h2 className="h-96 text-darkblue text-5xl flex justify-center items-center tracking-widest text-center">100 años celebrando la belleza en cada joya.</h2>
      </div>
    </Layout>
  )
}