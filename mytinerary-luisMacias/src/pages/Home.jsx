import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";


/*constate de imagenes para carrousel*/
const imagesCorrousel = [
    "/images/imagen1.jpg",
    "./src/images/fondo.jpg",
    "/images/imagen2.jpg",
    "/images/imagen3.jpg",
    "/images/imagen4.jpg"
]

function Home() {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000)

        return () => clearInterval(interval)
    }, [index])

    const prevSlide = () => {
        setIndex((pre) => (pre === 0 ? imagesCorrousel.length - 1 : pre - 1))
    }

    const nextSlide = () => {
        setIndex(pre => (pre === imagesCorrousel.length - 1 ? 0 : pre + 1))
    }


    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/cities");
    };






    return (
        <>

        
            <div className="flex text-black justify-center bg-cover bg-center items-center bg-[url('./images/fondo.jpg')] h-[95vh] ">
                <div className="flex flex-col justify-center items-center bg-white/70 m-5 md:m-30 p-5   rounded-xl">
                    <h1 className="text-4xl font-bold text-black mb-5">My Tineraries</h1>
                    <p className="text-black text-2xl text-center">Discover your ideal adventure, crafted by locals who live and breathe their cities!</p>
                    <button onClick={handleRedirect} className="bg-emerald-800 text-xl text-white px-4 py-2 rounded-md hover:bg-teal-500 mt-5 transition">
                        Explore more
                    </button>
                </div>
            </div>

            <div className="flex justify-center items-center p-30 bg-indigo-100">
                <div className="h-[60vh] flex flex-col justify-center items-center">



                    <div className="flex p-5">


                        <div className=" w-full p-30">
                            <h2 className="font-bold text-2xl m-5">Find the perfect destination</h2>
                            <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                            <button onClick={handleRedirect} className="bg-emerald-800 text-xl text-white px-4 py-2 rounded-md hover:bg-teal-500 mt-5 transition">
                                Explore more
                            </button>
                        </div>


                        <div className="ml-5 w-full">
                            <h2 className="mt-10 text-center text-4xl font-bold m-10">Popular Tineraries</h2>

                            <div className="relative  h-full overflow-hidden">
                                <div className="flex w-full transition-transform duration-500 " style={{ transform: `translateX(-${index * 100}%)` }}>
                                    {imagesCorrousel.map((src, index) => (<img key={index} src={src} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0 h-full rounded-xl object-cover" />))}
                                </div>
                                <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full shadow-md">
                                    ◀
                                </button>
                                <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full shadow-md">
                                    ▶
                                </button>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Home