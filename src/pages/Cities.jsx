import { useEffect, useState } from 'react'

import Card from '../components/Card'
function Cities() {

    const [cities, setCities] = useState([])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState([])







    useEffect(() => {
        if (!search) {
            setFilter(cities)
        } else {
            let searchLowerCase = search.toLocaleLowerCase()
            let filtered = cities.filter(city => city.name.toLowerCase().startsWith(searchLowerCase))
            setFilter(filtered)
        }

    }, [search, cities])


    useEffect(() => {
        async function fetchCities() {
            try {
                const response = await fetch("http://localhost:8080/api/city/allCities")
                const data = await response.json()
                setCities(data.response)

            } catch (error) {
                console.error("Error feching data", error)
            }
        }
        fetchCities()
    }, [])





    return (

        <>

            <div className="flex text-black justify-center bg-cover bg-center items-center bg-[url('./images/cities.jpg')]  h-[50vh] ">
                <div className="flex flex-col justify-center items-center bg-white/70 m-5 md:m-30 p-5   rounded-xl">
                    <h1 className="text-4xl font-bold text-black mb-5">Cities</h1>
                    <p className="text-black text-2xl text-center">A curated collection of breathtaking places and unforgettable experiences.</p>

                </div>
            </div>


            <div className="flex flex-col w-full justify-center bg-indigo-100 ">

                <div className='flex justify-center w-full'>
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} className=" w-50 bg-blue-300/50 m-10 rounded-xl p-2 border-2 " placeholder="Search city" />
                </div>
                <div className='p-5 w-full flex flex-wrap justify-evenly '>

                    {filter.length > 0 ? (
                        filter.map((city) => <Card key={city.name} id={city._id} name={city.name} image={city.images} country={city.country} />)
                    ) : (

                        <div className='h-[45vh]'>
                            <p className=" m-[10vh] text-gray-600 text-5xl font-bold">No cities found.</p>

                        </div>
                    )}


                </div>
            </div>
        </>
    )
}

export default Cities