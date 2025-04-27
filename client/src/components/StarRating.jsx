import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({rating = 4}) => {
    return (
        <>
            {Array(5).fill('').map((_, index) => (
                <img key={index} src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="star-rating" className='h-5 w-5' />
            ))}
        </>
    )
}

export default StarRating
