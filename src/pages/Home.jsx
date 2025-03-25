import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


/*constate de imagenes para carrousel*/
const imagesCorrousel = [
    "./src/images/carrousel1.jpg",
    "./src/images/carrousel2.jpg",
    "./src/images/carrousel3.jpg",
    "./src/images/carrousel4.jpg",
    "./src/images/carrousel5.jpg",
    "./src/images/carrousel6.jpeg",
    "./src/images/carrousel7.jpg",
    "./src/images/carrousel8.jpg",
    "./src/images/carrousel9.jpg",
    "./src/images/carrousel10.jpg",
    "./src/images/carrousel11.jpg",
    "./src/images/carrousel12.jpg",
]

function Home() {
    const [index, setIndex] = useState(0)
    const itemsPerPage = window.innerWidth < 768 ? 1 : 4;
    const totalSections = Math.ceil(imagesCorrousel.length / itemsPerPage)


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000)

        return () => clearInterval(interval)
    }, [index])


    const prevSlide = () => {
        setIndex((pre) => (pre === 0 ? totalSections - 1 : pre - 1))
    }

    const nextSlide = () => {
        setIndex(pre => (pre + 1) % totalSections)
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
                    <button onClick={handleRedirect} className="bg-gray-900 text-xl text-white px-4 py-2 rounded-md hover:bg-gray-500 mt-5 transition">
                        Explore more
                    </button>
                </div>
            </div>

            <div className="flex justify-center items-center p-30 bg-indigo-100">
                <div className="  flex flex-col justify-center items-center">



                    <div className="flex flex-col lg:flex-row p-5">


                        <div className=" w-full lg:w-1/3  flex justify-center flex-col items-center">
                            <h2 className="font-bold text-2xl m-5">Find the perfect destination</h2>
                            <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                            <button onClick={handleRedirect} className="bg-gray-900 text-xl text-white px-4 py-2 rounded-md hover:bg-gray-500 mt-5 transition">
                                Explore more
                            </button>
                        </div>


                        <div className="lg:ml-5 w-full">
                            <h2 className="mt-10 text-center text-4xl font-bold m-10">Popular Tineraries</h2>

                            <div className="relative  h-full overflow-hidden">
                                <div className="flex w-full transition-transform duration-500 " style={{ transform: `translateX(-${index * 100}%)`, width: `${3 * 100}` }}>
                                    {Array.from({ length: totalSections }).map((_, sectionIndex) => (
                                        <div key={sectionIndex} className="grid grid-cols-1 md:grid-cols-2  md:grid-rows-2  gap-4 w-full flex-shrink-0">
                                            {imagesCorrousel.slice(sectionIndex * itemsPerPage, (sectionIndex + 1) * itemsPerPage).map((src, imgIndex) => (
                                                <img key={imgIndex} src={src} alt={`Slide ${sectionIndex * itemsPerPage + imgIndex + 1}`} className="w-full h-full rounded-xl "/>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/30 p-2 rounded-full shadow-md">
                                    ◀
                                </button>
                                <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/30 p-2 rounded-full shadow-md ">
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