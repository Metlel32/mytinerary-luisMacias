import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"



export default function StandartdLayaout(){
    return(
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}