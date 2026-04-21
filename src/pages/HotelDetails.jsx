import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomCommonData, roomsDummyData } from '../assets/Assets'
import StarRating from '../components/StarRating'
import { Assets } from '../assets/Assets'
import { facilityIcons } from '../assets/Assets'

const HotelDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    console.log("URL ID:", id)

    const foundRoom = roomsDummyData.find(room => {
      console.log("Checking:", room._id)
      return room._id === id
    })

    console.log("FOUND ROOM:", foundRoom)

    if (foundRoom) {
      setRoom(foundRoom)
      setMainImage(foundRoom.images[0])
    }
  }, [id])

  console.log("HotelDetails rendered")

  if (!room) {
    return <h1>Loading or Room Not Found</h1>
  }

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 '>

      {/*Room Details*/}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}<span className='font-inter text-sm'>({room.roomType})</span></h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
      </div>

      {/*Room Rating*/}
      <div className='flex items-center gap-1 mt-2'>
        <StarRating />
        <p className='ml-2'>200+ reviews</p>
      </div>

      {/*Room Address*/}
      <div className='flex items-center gap-1 text-gray-500 mt-2 '>
        <img src={Assets.locationIcon} alt="locationIcon" />
        <span>{room.hotel.address}</span>
      </div>

      {/*Room Images*/}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt="roomImage" className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((image, index) => (
            <img onClick={() => setMainImage(image)}
              src={image} alt='roomImage' key={index}
              className={`w-full rounded-xl shadow-md object-cover cursor-pointer
              ${mainImage === image && 'outline-3 outline-orange-500'}`} />
          ))}
        </div>
      </div>

      {/*Room Highlights*/}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury like never before</h1>
          <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
            {room.amenities.map((item, index) => (
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                <p className='text-xs'>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/*Room Price*/}
        <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
      </div>

      {/*CheckIn CheckOut Form*/}
      <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>

        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>

          <div className='flex flex-col'>
            <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
            <input type="date" id='checkInDate' placeholder='Check-In' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
          </div>

          <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
          <div className='flex flex-col'>
            <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
            <input type="date" id='checkOutDate' placeholder='Check-Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
          </div>

          <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
          <div className='flex flex-col'>
            <label htmlFor="guests" className='font-medium'>Guests</label>
            <input type="number" id='guests' placeholder='0' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
          </div>

        </div>

        <button type='submit' className='bg-blue-500 hover:bg-blue-800 active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-24 py-3 md:py-4 text-base cursor-pointer'>
          Check Availability
        </button>
      </form>

      {/*Common Specification*/}
      <div className='py-12 mt-25 space-y-4'>
        {roomCommonData.map((spec, index) => (
          <div key={index} className='flex items-start gap-2'>
            <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
            <div>
              <p className='text-base'>{spec.title}</p>
              <p className='text-gray-500'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
        <p>Our hotel booking app offers a premium experience designed for comfort and convenience. Users can explore a wide range of luxurious rooms featuring modern amenities such as high-speed Wi-Fi, scenic views, and top-class room service. The platform provides seamless booking with flexible check-in and check-out options tailored to user preferences. Guests can enjoy curated facilities like swimming pools, fine dining, and personalized services. With an intuitive interface and exclusive deals, the app ensures a smooth and indulgent stay experience.</p>
      </div>

      {/* Hosted By */}
      <div className='flex flex-col items-start gap-4 my-12'>
        <div className='flex gap-4'>
           <img src="/logo2.png" alt="Host" className='h-14 w-14 md:h-18 md:w-18 rounded-full' />
           <div>
            <p className='text-lg md:text-xl'>Hosted By {room.hotel.name}</p>
            <div className='flex items-center mt-1'>
              <StarRating/>
              <p className='ml-2'>200+ reviews</p>
            </div>
           </div>
        </div>
        <button className='px-6 py-2.5 mt-4 rounded text-white bg-blue-500 hover:bg-blue-800 transition-all cursor-pointer'>Contact Now</button>
      </div>
    </div>
  )
}

export default HotelDetails
