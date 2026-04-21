import React from 'react'
import heroImg1 from '../assets/heroImg1.jpg'
import { Search } from 'lucide-react';

const Hero = () => {
  return (


    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen' style={{
      backgroundImage: `url(${heroImg1})`
    }}>
      <p className='bg-black/40 px-3.5 py-1 rounded-xl mt-20'>Your Stay, Perfected</p>
      <h1 className=' bg-black/40 rounded-xl font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Uncover Your Ideal Getaway</h1>
      <p className='max-w-130 mt-4 text-sm md:text-base bg-black/40 rounded-xl'> Indulge in extraordinary comfort at our handpicked selection of elite hotels and resorts. Let us take you there. </p>

      <div className='bg-white border border-gray-300 shadow-lg rounded-md z-10 left-[10%] absolute hidden lg:block bottom-[10%] items-center justify-center w-[1050px] mx-auto p-4'>
        <div className='flex gap-3 items-center'>
          <div className='grid gap-5 grid-cols-4 flex-grow'>
            <div className='flex flex-col gap-2 text-black'>
              <label htmlFor="" className='flex font-semibold gap-1 items-center'><Search className='w-4 h-4' />Destination</label>
              <select name="" id="" className='border border-gray-300 rounded-sm p-1'>
                <option value="">Select Options</option>
                <option value="">Dubai</option>
                <option value="">Singapore</option>
                <option value="">New York</option>
                <option value="">London</option>
                <option value="">Bali</option>
              </select>
            </div>
            <div className='flex flex-col gap-2 text-black'>
              <label htmlFor="" className='font-semibold'>Check In</label>
              <input type="date" className='border p-1 border-gray-300 rounded-sm' />
            </div>
            <div className='flex flex-col gap-2 text-black'>
              <label htmlFor="" className='font-semibold'>Check Out</label>
              <input type="date" className='border p-1 border-gray-300 rounded-sm' />
            </div>
            <div className='flex flex-col gap-2 text-black'>
              <label htmlFor="" className='flex font-semibold gap-1 items-center'><Search className='w-4 h-4' />Guest</label>
              <select name="" id="" className='border border-gray-300 rounded-sm p-1'>
                <option value="">Select Options</option>
                <option value="">2 Guest 1 Children</option>
                <option value="">2 Guest 1 Children</option>
                <option value="">2 Guest 1 Children</option>
                <option value="">2 Guest 1 Children</option>
                <option value="">2 Guest 1 Children</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-white'>Transmissioin</label>
            <button className=' flex gap-1 items-center bg-red-500 transition-all ease-in text-white hover:bg-black hover:text-white px-4 h-8 py-1 rounded-md'><Search className='w-4 h-4' />Search</button>
          </div>

        </div>
      </div>

    </div >


  )
}

export default Hero
