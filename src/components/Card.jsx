import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Card({id, name, image, country }) {


  const navigate = useNavigate();
  function handleRedirect() {
    navigate(`/cities/${id}`);
  } 

  return (
    <div className="m-5 bg-neutral-400 rounded-2xl shadow-md shadow-green overflow-hidden border  border-neutral-300">
      <img className="w-80 p-2  h-48 object-cover rounded-2xl" src={image} alt={name} />
      <div className="p-1 flex flex-col items-center">
        <div className="flex  ">
          <h2 className="text-xl font-semibold text-gray-800 p-1 mr-3">{name}</h2>
          <p className="text-gray-600 p-1">{country} </p><MapPin className="w-6 h-6 pt-1 bg-blue-950 text-white rounded-2xl" />
        </div>

        <button onClick={handleRedirect} className="bg-gray-900 hover:bg-gray-700 font-bold mb-1 text-white p-2 rounded-xl">View More</button>
      </div>
    </div>
  );
}

export default Card;
