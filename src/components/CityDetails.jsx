import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CityDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [city, setCity] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchCity() {
            try {
                const response = await fetch(`http://localhost:8080/api/city/id/${id}`)
                const data = await response.json()
                setCity(data.response)
            } catch (error) {
                console.error("Error fetching data", error)
            } finally {
                setLoading(false)
            }
        }
        fetchCity();
    }, []);


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




            <div className="bg-orange-500 h-[40vh] w-[99vw] flex items-center justify-center">
                <img className="w-50 rounded-2xl border" src="../src/images/construction2.jpg" alt="contruction" />
            </div>

        </div>
    );
}

export default CityDetail;

