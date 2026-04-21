import React from 'react'
import { Assets } from '../assets/Assets';
import starIconOutline from '../assets/starIconOutline.png';


const StarRating = ({ rating = 4 }) => {
  return (
    <div className='flex items-center gap-1'>
      {Array(5).fill('').map((_, index) => (
        <img src={rating > index ? Assets.starIcon : starIconOutline} alt='starIcon' className='w-4.5 h-4.5' />
      ))}
    </div>
  )
}

export default StarRating
