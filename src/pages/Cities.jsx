import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCities, searchActions } from '../store/actions/citiesActions'
import Card from '../components/Card'

function Cities() {
    const dispatch = useDispatch()


    const cities = useSelector(state => state.cities.citiesFilter)
    const search = useSelector(state => state.cities.searchActions)
    const status = useSelector(state => state.cities.status)
    const error = useSelector(state => state.cities.error)



    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCities())
        }
    }, [dispatch, status])

    const handleSearchChange = (e) => {
        dispatch(searchActions(e.target.value));
    };


    return (
        <>
            <div className="flex text-black justify-center bg-cover bg-center items-center bg-[url('./images/cities.jpg')]  h-[50vh] ">
                <div className="flex flex-col justify-center items-center bg-white/70 m-5 md:m-30 p-5   rounded-xl">
                    <h1 className="text-4xl font-bold text-black mb-5">Cities</h1>
                    <p className="text-black text-2xl text-center">  A curated collection of breathtaking places and unforgettable experiences. </p>
                </div>
            </div>

            <div className="flex flex-col w-full justify-center bg-indigo-100 ">
                <div className='flex justify-center w-full'>
                    <input type="text" value={search} onChange={handleSearchChange} className=" w-50 bg-blue-300/50 m-10 rounded-xl p-2 border-2 " placeholder="Search city" />
                </div>

                <div className='p-5 w-full flex flex-wrap justify-evenly'>
                    {status === "pending" && <p>Loading cities...</p>}
                    {status === "failed" && <p className="text-red-600">Error: {error}</p>}
                    {status === "succeeded" && cities.length > 0 ? (
                        cities.map(city => (
                            <Card key={city._id} id={city._id} name={city.name} image={city.images} country={city.country} />
                        ))
                    ) : (
                        status === "succeeded" && (
                            <div className='h-[45vh]'>
                                <p className="m-[10vh] text-gray-600 text-5xl font-bold">No cities found.</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}

export default Cities
