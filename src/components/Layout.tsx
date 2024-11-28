import Footer from "./Footer";
import Header from "./Header";
type props = React.PropsWithChildren<object>


export default function Layout({children}: props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
