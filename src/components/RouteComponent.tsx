import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Services from "../pages/services/Services"
import Branches from "../pages/branches/Branches"
import Header from "./Header"

const RouteComponent = () => {
  return (
    <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/branches" element={<Branches/>} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default RouteComponent