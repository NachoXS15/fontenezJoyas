import Layout from "../components/Layout";
import logo from '../assets/logo.png'
import bannerImg from '../assets/banner_img.jpg'
export default function Index() {
  return (
    <Layout>
      <div className="w-full h-[600px] flex md:mt-5 px-10">
        <div className="w-3/5 bg-center bg-cover bg-slate-500" style={{backgroundImage: `url(${bannerImg})`}}>
           
        </div>
        <div className="w-2/5 bg-purplemain flex items-center justify-center">
          <img src={logo} width={400} alt="" />
        </div>
      </div>
      <div className="w-full h-96 bg-white px-5">
        <h2 className="h-96 text-darkblue text-5xl flex justify-center items-center tracking-widest text-center">100 años celebrando la belleza en cada joya.</h2>
      </div>
    </Layout>
  )
}
