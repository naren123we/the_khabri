import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Rootlayout = ({date,setcatogory}) => {
  return (
    <>
    <header>
      <Navbar date={date} setcatogory={setcatogory}/>
    </header>
    <main>
    <Outlet/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Rootlayout
 