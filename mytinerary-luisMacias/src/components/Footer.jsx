import {Facebook, Instagram, Twitter} from 'lucide-react'

export default function Footer(){
    return(
        <div className="h[10vh] lg:flex flex  flex-col md:flex md:justify-between  md:flex-row lg:flex-row lg:justify-between bg-emerald-800">


            <div className='p-5 flex flex-col justify-center '> 

                <div className='flex items-center mb-2'>
                    <Facebook  className='bg-blue-900 rounded-2xl' size={32}/><p className='ml-3'>Facebook</p>
                </div>
                <div className='flex items-center mb-2'>
                    <Instagram    className='bg-purple-900 rounded-2xl' size={32}/><p className='ml-3'>Instagram</p>
                </div>
                <div className='flex items-center'>
                    <Twitter    className='bg-blue-300 rounded-2xl' size={32}/><p className='ml-3'>Twitter</p>
                </div>
                
                
                
            </div>

            <div className='m-5'>
                <h2 className='font-bold '>Contact Us</h2>
                <p>123 Street, City</p>
                <p>Email: contact@mytinerary.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>


        </div>
    )
}