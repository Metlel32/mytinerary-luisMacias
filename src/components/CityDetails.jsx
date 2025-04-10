import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Banknote, Clock } from "lucide-react";
import Activity from "./Activity";

function CityDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [city, setCity] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showComments, setShowComments] = useState(false)


    useEffect(() => {
        const fetchCity = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/city/id/${id}`)
                setCity(response.data.response)

            } catch (error) {
                console.error("Error fetching data", error)
            } finally {
                setLoading(false)
            }
        }

        fetchCity()
    }, [id])

    console.log(city);



    if (loading) {
        return <p className="text-center text-xl mt-5">Loading...</p>;
    }

    return (
        <div className="flex flex-col items-center bg-indigo-100 justify-center   p-5">

            <div className="lg:flex lg:flex-row m-5 p-5">
                <div className="flex flex-col items-center justify-center">

                    <img className="object-cover w-150 rounded-2xl" src={city.images} alt={city.name} />

                </div>
                <div className="flex lg:mt-5 flex-col items-center justify-center">
                    <h1 className="text-4xl text-center mt-5 font-bold mb-4">{city.name}</h1>
                    <p className="p-5 w-200" >{city.description}</p>
                    <button onClick={() => navigate("/cities")} className="mb-5 px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-lg "> Back to Cities</button>

                </div>
            </div>




            <div className="bg-orange-500 w-[99vw] p-14 flex flex-wrap gap-10 justify-center items-start">

                {city.itineraries.map((itinerary) => (
                    <div key={itinerary._id} className="w-full md:w-[45%] lg:w-[30%] bg-white rounded-2xl shadow-lg p-4">
                        <div className="">
                            <img src={itinerary.imageItinerary} className="w-full h-[40vh] object-cover rounded-xl mb-4flex items-center gap-4 " alt={itinerary.name} />

                        </div>
                        <div className="pt-5 flex flex-wrap ">

                            <div className="bg-indigo-100 flex flex-col items-center justify-center  rounded-2xl w-1/3 p-3">
                                <img src={itinerary.imageProfile} alt={itinerary.nameProfile} className="rounded-full w-12 h-12 object-cover" />
                                <span className="font-semibold text-blue-600">Created by</span>
                                <p className="font-extralight">{itinerary.nameProfile}</p>


                            </div>
                            <div className="ml-5 w-3/5">
                                <h2 className="text-lg text-center font-semibold text-gray-800">{itinerary.name}</h2>
                                <div className="flex justify-evenly mt-5">
                                    <div className="flex ">
                                        <Banknote className="mr-2 text-green-600" ></Banknote>
                                        <p className="font-bold">{itinerary.price}$</p>
                                    </div>
                                    <div className="flex">
                                        <Clock className="mr-2 text-blue-700"></Clock>
                                        <span className="font-bold"> {itinerary.duration >= 60 && `${Math.floor(itinerary.duration / 60)}h `}
                                        {itinerary.duration % 60 !== 0 && `${itinerary.duration % 60}min`}</span>

                                    </div>
                                    <img src="../images/construction.jpg" alt="" />

                                </div>
                                <div className="mt-5 flex flex-wrap">
                                    {itinerary.hashtags.map((hast, index) => {
                                        return <span className="text-white text-sm px-2 py-1 rounded-xl bg-blue-500 m-1" key={index}> {hast}</span>
                                    })}
                                </div>

                            </div>

                            <div className=" flex flex-row w-full mt-5 justify-center items-center">
                                    <button onClick={() => setShowComments(!showComments)} className="text-center bg-gray-900 hover:bg-gray-700 text-white rounded-lg p-2">{showComments ? 'hide comments' : "View More"}</button>
                                    
                                    {showComments && <Activity/>}
                                    
                            </div>




                        </div>
                    </div>


                ))}


            </div>

        </div>
    );
}

export default CityDetail;

