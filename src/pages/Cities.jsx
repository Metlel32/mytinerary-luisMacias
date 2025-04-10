import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCities } from '../store/actions/citiesActions'
import Card from '../components/Card'

function Cities() {
    const dispatch = useDispatch()


    const cities = useSelector(state => state.cities.cities)
    const status = useSelector(state => state.cities.status)
    const error = useSelector(state => state.cities.error)

    const [search, setSearch] = useState("")
    const [filteredCities, setFilteredCities] = useState([])



    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCities())
        }
    }, [dispatch, status])


    useEffect(() => {
        if (!search) {
            setFilteredCities(cities)
        } else {
            const searchLower = search.toLowerCase()
            const filtered = cities.filter(city =>
                city.name.toLowerCase().startsWith(searchLower)
            )
            setFilteredCities(filtered)
        }
    }, [search, cities])

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
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} className=" w-50 bg-blue-300/50 m-10 rounded-xl p-2 border-2 " placeholder="Search city" />
                </div>

                <div className='p-5 w-full flex flex-wrap justify-evenly'>
                    {status === "pending" && <p>Loading cities...</p>}
                    {status === "failed" && <p className="text-red-600">Error: {error}</p>}
                    {status === "succeeded" && filteredCities.length > 0 ? (
                        filteredCities.map(city => (
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
