import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.jpg")] bg-no-repeat bg-cover bg-center h-screen'>

      <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20 text-sm md:text-base'>
        Where Distinction Meets Destination
      </p>

      <h1 className='font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight font-extrabold max-w-xl mt-4'>
        Experience the Pinnacle of Luxury Living
      </h1>

      <p className='max-w-xl mt-3 text-sm md:text-base'>
        Experience refined luxury, exceptional service, and timeless comfort in a destination designed for unforgettable, indulgent stays.
      </p>

      <form className='bg-white text-gray-700 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row md:items-end gap-4 w-full max-w-5xl'>

        <div className='w-full md:w-auto'>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="calender" className='h-4' />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input list='destinations' id="destinationInput" type="text" className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
          <datalist id='destinations'>
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <div className='w-full md:w-auto'>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="calender" className='h-4' />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input id="checkIn" type="date" className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
        </div>

        <div className='w-full md:w-auto'>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="calender" className='h-4' />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input id="checkOut" type="date" className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
        </div>

        <div className='w-full md:w-auto'>
          <label htmlFor="guests" className="block">Guests</label>
          <input min={1} max={4} id="guests" type="number" className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="0" />
        </div>

        <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white w-full md:w-auto max-md:py-2'>
          <img src={assets.searchIcon} alt="search" className='h-5' />
          <span>Search</span>
        </button>
      </form>
    </div>
  )
}

export default Hero
