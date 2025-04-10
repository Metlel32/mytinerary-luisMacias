import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function CityDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [city, setCity] = useState(null)
    const [loading, setLoading] = useState(true)


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




            <div className="bg-orange-500 w-[99vw] p-14 flex items-center justify-center">
                <div>
                    <div className="	bg-white   w-[80%]  rounded-2xl flex items-center justify-center flex-col">

                        {city.itineraries.map((itinerary) => (
                            <div>
                                <div className="">
                                    <img src={itinerary.imageItinerary} className="w-full m-5 h-auto border-2 border-white rounded-xl " alt={itinerary.name} />

                                </div>
                                <div>
                                    <img src={itinerary.imageProfile} alt={itinerary.nameProfile} className="rounded-full w-10" />
                                    <h2>{itinerary.name}</h2>


                                </div>
                            </div>


                        ))}



                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default CityDetail;

