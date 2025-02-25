import { useState } from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Menu, X , Leaf } from "lucide-react";


const routes = [
    { path: "/", name: "Home" },
    { path: "/cities", name: "Cities" }
]




export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full  bg-emerald-800 border-b-1 ">
            <div className=" container mx-auto flex justify-between items-center p-4">
                <div className="flex space-x-4">
                    <Leaf className="w-10 h-10 text-white" />
                </div>

                <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul className="hidden md:flex  space-x-4">
                    {routes.map((route) => (
                        <li key={route.path} className="flex items-center">
                            <NavLink to={route.path} className={({ isActive }) => isActive ? "font-bold bg-teal-500 rounded-sm p-2 " : " p-2 rounded-sm bg-indigo-300 hover:bg-indigo-900  hover:text-white"}>
                                {route.name}
                            </NavLink>
                            
                        </li>
                    ))}
                    <li  className=" flex items-center">
                        <button className=" bg-indigo-300 p-2  hover:bg-indigo-900 hover:text-white rounded-sm ">Login</button>
                    </li>
                </ul>
            </div>

            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col items-center bg-teal-800 space-y-4 py-4">
                    {routes.map((route) => (
                        <li key={route.path} onClick={() => setIsOpen(false)}>
                            <NavLink to={route.path} className="text-white hover:text-blue-900 text-lg">{route.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}