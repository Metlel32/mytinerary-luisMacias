
function Card({ name, image, country }) {
  return (
    <div className="m-5 bg-white rounded-2xl shadow-md overflow-hidden border  border-gray-200">
      <img className="w-80 h-48 object-cover" src={image} alt={name} />
      <div className="p-1 flex flex-col items-center">
        <div className="flex ">
          <h2 className="text-xl font-semibold text-gray-800 p-1">{name}</h2>
          <p className="text-gray-600 p-1">{country}</p>
        </div>

        <button className="bg-black text-white p-2 rounded-xl">Details</button>
      </div>
    </div>
  );
}

export default Card;
