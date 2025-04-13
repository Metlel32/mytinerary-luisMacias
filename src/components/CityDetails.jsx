import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Clock, Wallet, ThumbsUp } from "lucide-react";
import Activity from "./Activity";
import { useDispatch } from "react-redux";
import { fetchItineraries } from "../store/actions/tinerariesActions";
import { useSelector } from "react-redux";
import { likeItinerary } from "../store/actions/tinerariesActions";
function CityDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const likes = useSelector((state) => state.itineraries.likes)



    const navigate = useNavigate()
    const [showComments, setShowComments] = useState({})


    const { itineraries, status, error } = useSelector((state) => state.itineraries);
    const city = itineraries.itineraries

    useEffect(() => {

        dispatch(fetchItineraries(id))

    }, [dispatch, id])





    const toggleComments = (id) => {
        setShowComments(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };





    if (status === "pending") {
        return <p className="text-center text-xl mt-5">Loading itineraries...</p>;
    }

    if (status === "failed") {
        return <p className="text-center text-xl text-red-600 mt-5">Error: {error}</p>;
    }

    return (
        <div className="flex flex-col items-center bg-indigo-100 justify-center   p-5">

            <div className="lg:flex lg:flex-row m-5 p-5">
                <div className="flex flex-col items-center justify-center">

                    {city?.images && (
                        <img className="object-cover w-150 rounded-2xl" src={city.images} alt={city.name} />
                    )}

                </div>
                <div className="flex lg:mt-5 flex-col items-center justify-center">
                    <h1 className="text-4xl text-center mt-5 font-bold mb-4">{city.name}</h1>
                    <p className="p-5 w-200" >{city.description}</p>
                    <button onClick={() => navigate("/cities")} className="mb-5 px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-lg "> Back to Cities</button>

                </div>
            </div>




            <div className="bg-orange-500 w-[99vw] p-14 flex flex-wrap gap-10 justify-center items-start">

                {Array.isArray(city.itineraries) && city.itineraries.map((itinerary) => (
                    <div key={itinerary._id} className="w-full md:w-[45%] lg:w-[30%] bg-neutral-200   rounded-2xl shadow-lg shadow-red-900 p-4 flex-col h-full  min-h-[85vh]">
                        <div className="flex-shrink-0  relative ">
                            <button onClick={() => dispatch(likeItinerary(itinerary._id))} className="absolute bg-white top-2 left-2 p-2  rounded-full hover:bg-green-500">
                                <ThumbsUp className="text-black " size={24} />
                                <span className="ml-1 text-sm font-bold">{likes[itinerary._id] || 0}</span>
                            </button>
                            <img src={itinerary.imageItinerary} className="w-full h-[40vh] object-cover rounded-xl shadow-sm shadow-blue-900 border mb-4  " alt={itinerary.name} />

                        </div>
                        <div className="flex-1 pt-5 flex flex-wrap ">

                            <div className="bg-indigo-100 flex flex-col items-center justify-center  rounded-2xl w-1/3 p-3">
                                <img src={itinerary.imageProfile} alt={itinerary.nameProfile} className="rounded-full w-12 h-12 object-cover" />
                                <span className="font-semibold text-blue-600">Created by</span>
                                <p className="font-extralight">{itinerary.nameProfile}</p>


                            </div>
                            <div className="ml-5  w-3/5">
                                <h2 className="text-lg text-center font-semibold text-gray-800">{itinerary.name}</h2>
                                <div className="flex justify-evenly mt-5">
                                    <div className="flex ">
                                        <Wallet className="mr-2 w-6 h-6 text-indigo-500" ></Wallet>
                                        <p className="font-bold">{itinerary.price}$</p>
                                    </div>
                                    <div className="flex">
                                        <Clock className="mr-2   text-blue-700"></Clock>
                                        <span className="font-bold"> {itinerary.duration >= 60 && `${Math.floor(itinerary.duration / 60)}h `}
                                            {itinerary.duration % 60 !== 0 && `${itinerary.duration % 60}min`}</span>

                                    </div>
                                    <img src="../images/construction.jpg" alt="" />

                                </div>
                                <div className="mt-5 flex flex-wrap">
                                    {itinerary.hashtags.map((hast, index) => {
                                        return <span className="text-white  text-sm px-2 py-1 rounded-xl bg-blue-500 m-1" key={index}> {hast}</span>
                                    })}
                                </div>

                            </div>

                            <div className=" flex flex-col  w-full mt-5  items-center">
                                <button onClick={() => toggleComments(itinerary._id)} className="text-center bg-gray-900 hover:bg-gray-700 text-white rounded-lg  p-2">
                                    {showComments[itinerary._id] ? 'Hide comments' : 'View More'}
                                </button>



                            </div>
                            <div className="bg-red-300 mt-5 rounded-xl shadow-lg shadow-indigo-400 flex flex-col justify-center items-center">
                                {showComments[itinerary._id] && <Activity />}
                            </div>




                        </div>
                    </div>


                ))}


            </div>

        </div>
    );
}

export default CityDetail;

