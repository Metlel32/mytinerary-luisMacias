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
            }finally{
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
            <img className="object-cover rounded-2xl" src={city.images} alt={city.name} />
            <h1 className="text-4xl  mt-5 font-bold mb-4">{city.name}</h1>
            <button onClick={() => navigate("/cities")} className="mb-5 px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-lg "> Back to Cities</button>

            <div className="bg-orange-500 h-[40vh] w-[99vw] flex items-center justify-center">
                <p className="text-2xl font-bold text-center pt-5 text-white  ">Under construction ... </p>
            </div>

        </div>
    );
}

export default CityDetail;

