import Footer from "./Footer";
import Header from "./Header";
type props = React.PropsWithChildren<object>


export default function Layout({children}: props) {
  return (
    <div className="max-w-full min-h-screen flex flex-col justify-between">
      <Header />
        {children}
      <Footer />
    </div>
  )
}
