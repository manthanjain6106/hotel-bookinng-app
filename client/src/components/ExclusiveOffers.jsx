import React from 'react'
import Title from './Title'
import {assets, exclusiveOffers} from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>
            <Title aling='left' title='Exclusive Escapes Await' subTitle='Unlock limited-time offers for your perfect stay' />
            <button className='flex items-center gap-2 text-sm font-medium px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-100 transition-all group cursor-pointer max-md:mt-12'>
            Discover Stays
                <img src={assets.arrowIcon} alt="arrow-icon" className='group-hover:translate-x-1 transition-all' />
            </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {exclusiveOffers.map((item)=>(
                <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${item.image})`}}>

                    <div className='absolute inset-0 bg-black/30 rounded-xl z-0'></div>

                    <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>{item.priceOff}% OFF</p>
                    <div className='relative z-10'>
                        <p className='text-2xl font-medium font-playfair'>{item.title}</p>
                        <p>{item.description}</p>
                        <p className='text-sx text-white/70 mt-3'>{item.expiryDate}</p>
                    </div>
                    <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5 text-sm relative z-10'>
                        View Offers
                        <img className='group-hover:translate-x-1 transition-all w-4 h-4 invert' src={assets.arrowIcon} alt="arrow-icon" />
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ExclusiveOffers
