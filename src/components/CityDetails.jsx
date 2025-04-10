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
                            <img src={itinerary.imageItinerary} className="w-full h-auto rounded-xl mb-4flex items-center gap-4 " alt={itinerary.name} />

                        </div>
                        <div>
                            <h2 className="text-lg text-center font-semibold text-gray-800">{itinerary.name}</h2>

                            <img src={itinerary.imageProfile} alt={itinerary.nameProfile} className="rounded-full w-12 h-12 object-cover" />


                        </div>
                    </div>


                ))}


            </div>

        </div>
    );
}

export default CityDetail;

