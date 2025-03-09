import Layout from "../components/Layout";
import logo from '../assets/logo.png'
import Anillo from '../assets/anillo.jpg'
import bannerImg from '../assets/banners/banner1.jpg'
import bannerImg2 from '../assets/banners/banner3.jpg'
import bannerImg3 from '../assets/banners/banner2.jpg'
import bannerImg4 from '../assets/banners/banner4.jpg'
import bannerImg5 from '../assets/banners/banner5.jpg'
export default function Index() {
  return (
    <Layout>
      <section className="w-full h-[650px] bg-cover bg-center" style={{ backgroundImage: `url(${Anillo})` }}>
        <div className="bg-purplemain w-full h-[650px] bg-cover bg-opacity-40 flex items-center justify-center ">
          <img src={logo} width={300} alt="" />
        </div>
      </section>
      <article className="w-full h-96 bg-white px-5" style={{fontFamily: 'quador'}}>
        <h2 className="h-96 text-darkblue text-5xl flex justify-center items-center tracking-widest text-center">100 años celebrando la belleza en cada joya.</h2>
      </article>
      <section className="w-full h-fit md:px-10 mb-10">
        <div className="w-full h-[500px] px-10 bg-no-repeat bg-cover bg-center transition" style={{backgroundImage: `url(${bannerImg2})`}}>
        </div>
      </section>
      <hr className="m-auto w-40 border border-blue-800" />
      <section className="w-full h-fit md:px-10 my-10">
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <div className="w-full md:w-3/4 h-96 bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${bannerImg})`}}></div>
          <div className="w-full md:w-1/4 h-72 md:h-96 bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${bannerImg4})`}}></div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/5 h-72 md:h-96 bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${bannerImg3})`}}></div>
          <div className="w-full md:w-3/4 h-96 bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${bannerImg5})`}}></div>
        </div>
      </section>
    </Layout>
  )
}