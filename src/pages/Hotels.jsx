import React from 'react';
import { facilityIcons, roomsDummyData } from '../assets/Assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { Assets } from '../assets/Assets';
import { useState } from 'react';

const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
      <span className='font-light select-none'>{label}</span>
    </label>
  )
}

const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input type="radio" name='sortOption' checked={selected} onChange={(e) => onChange(label)} />
      <span className='font-light select-none'>{label}</span>
    </label>
  )
}

const Hotels = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);
  // Storing selected filters in STATE
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [selectedSort, setSelectedSort] = useState("")

  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Luxury Room",
    "Family Suite",
  ];

  const priceRanges = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];

  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  //--------Applying Filter Logic---imp part------------
  let filteredRooms = [...roomsDummyData]

  // Filter by room type
  if (selectedRoomTypes.length > 0) {
    filteredRooms = filteredRooms.filter(room =>
      selectedRoomTypes.includes(room.roomType)
    )
  }

  // Filter by price
  if (selectedPriceRanges.length > 0) {
    filteredRooms = filteredRooms.filter(room => {
      return selectedPriceRanges.some(range => {
        const [min, max] = range.split(" to ").map(Number)
        return room.pricePerNight >= min && room.pricePerNight <= max
      })
    })
  }

  // Sorting
  if (selectedSort === "Price Low to High") {
    filteredRooms.sort((a, b) => a.pricePerNight - b.pricePerNight)
  }

  if (selectedSort === "Price High to Low") {
    filteredRooms.sort((a, b) => b.pricePerNight - a.pricePerNight)
  }

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-8 md:px-16 lg:px-24 xl:px-32'>
      {/*Rooms section-left side*/}
      <div className="flex-1">
        <div className='flex flex-col items-start text-left'>
          <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
          <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Take advantage of our limited time offers and special packages to enhance your stay and create unforgettable memories.</p>
        </div>
        {filteredRooms.map((rooms) => (
          <div key={rooms._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
            <img onClick={() => { navigate(`/hotelDetails/${rooms._id}`); scrollTo(0, 0) }} src={rooms.images[0]} alt="hotel-img" title='View Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' />
            <div className='md:w-1/2 flex flex-col gap-2'>
              <p className='text-gray-500'>{rooms.hotel.city}</p>
              <p onClick={() => { navigate(`/hotelDetails/${rooms._id}`); scrollTo(0, 0) }}
                className='text-gray-800 text-3xl font-playfair cursor-pointer'>{rooms.hotel.name}</p>
              <div className='flex items-center'>
                <StarRating />
                <p className='ml-2'>400+ reviews</p>
              </div>
              <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                <img src={Assets.locationIcon} alt="locationIcon" />
                <span>{rooms.hotel.address}</span>
              </div>

              {/*Rooms Amenities*/}
              <div className='flex flex-wrap items-center gap-1 text-gray-500 mt-2 text-sm'>
                {rooms.amenities.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70">
                    <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                    <p className='text-xs'>{item}</p>
                  </div>
                ))}
              </div>

              {/*Room Price per night*/}
              <p className='text-xl font-medium text-gray-700'>${rooms.pricePerNight}/night</p>
            </div>
          </div>
        ))}

      </div>

      {/*Filter section-right side*/}
      < div className='ml-auto bg-white w-64 flex-shrink-0 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16'>

        <div className={`flex justify-between items-center px-8 py-3 w-60 min-lg:border-b border-gray-300 ${openFilters && "border-b"}`}>

          <p className='text-base font-medium text-gray-800'>FILTERS</p>


          <div className='cursor-pointer text-xs'>
            <span onClick={() => { setOpenFilters(!openFilters) }} className='lg:hidden'>
              {openFilters ? 'HIDE' : 'SHOW'}</span>
            <span className='hidden lg:block' onClick={() => {
              setSelectedRoomTypes([])
              setSelectedPriceRanges([])
              setSelectedSort("")
            }}>CLEAR</span>
          </div>
        </div>

        <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2 '>Popular Filters</p>
            {roomTypes.map((room, index) => (
              //updating checkbox
              <CheckBox key={index} label={room} selected={selectedRoomTypes.includes(room)}
                onChange={(checked, label) => {
                  if (checked) {
                    setSelectedRoomTypes(prev => [...prev, label])
                  } else {
                    setSelectedRoomTypes(prev => prev.filter(item => item !== label))
                  }
                }} />
            ))}
          </div>


          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2 '>Price Range</p>
            {priceRanges.map((range, index) => (
              //Price filter
              <CheckBox
                key={index}
                label={`$ ${range}`}
                selected={selectedPriceRanges.includes(range)}
                onChange={(checked, label) => {
                  const value = label.replace("$ ", "")

                  if (checked) {
                    setSelectedPriceRanges(prev => [...prev, value])
                  } else {
                    setSelectedPriceRanges(prev => prev.filter(item => item !== value))
                  }
                }}
              />
            ))}
          </div>


          <div className='px-5 pt-5 pb-7'>
            <p className='font-medium text-gray-800 pb-2 '>Sort By</p>
            {sortOptions.map((option, index) => (
              // handle sorting
              <RadioButton
                key={index}
                label={option}
                selected={selectedSort === option}
                onChange={(label) => setSelectedSort(label)}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hotels
