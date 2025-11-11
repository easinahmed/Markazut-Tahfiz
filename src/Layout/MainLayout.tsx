import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"


const MainLayout:React.FC = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout