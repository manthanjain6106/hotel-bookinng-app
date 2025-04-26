import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'

const FeturedDestination = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

    <Title title='Explore Our Top Destinations' subTitle='Unwind in luxury, comfort, and style. Browse our curated stays and find your next unforgettable escape, crafted just for you.'/>

      <div className='flex flex-wrap items-center justify-center gap-6 mt-12'>
        {roomsDummyData.slice(0,4).map((room, index)=>(
            <HotelCard key={room._id} room={room} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default FeturedDestination
