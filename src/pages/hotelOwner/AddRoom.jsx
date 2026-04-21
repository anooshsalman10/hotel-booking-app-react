import React from 'react'
import { useState } from 'react'
import Title from '../../components/Title';
import { Assets } from '../../assets/Assets';

const AddRoom = () => {

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      'Free Wifi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false,
    }
  })


  return (
    <form className="w-full max-w-4xl mx-auto px-4 mb-20">
      <Title align='left' font='outfit' title='Add Room' subTitle='Fill in the details and accurate room details, pricing and amenities, to enhance the user booking experience.' />
      {/*Upload Area for Images */}
      <p className='text-gray-800 mt-10'>Images</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-2'>
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <div className="h-20 w-20 border-2 border-dashed border-gray-400 rounded-lg overflow-hidden">
              <img className='h-full w-full object-cover cursor-pointer opacity-80 border border-gray-300 rounded'
                src={images[key] ? URL.createObjectURL(images[key]) : Assets.uploadArea} alt="" />
            </div>

            <input type="file" accept='image/*' id={`roomImage${key}`} hidden onChange={e => setImages({ ...images, [key]: e.target.files[0] })} />
          </label>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
        <div className='w-full'>
          <p className='text-gray-800 mt-4'>Room Type</p>
          <select value={inputs.roomType} onChange={e => setInputs({ ...inputs, roomType: e.target.value })}
            className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
            <option value=''>Single Room Type</option>
            <option value='Single Bed'>Single Bed</option>
            <option value='Double Bed'>Double Bed</option>
            <option value='Luxury Room'>Luxury Room</option>
            <option value='Family Suite'>Family Suite</option>
          </select>
        </div>

        <div>
          <p className='mt-4 text-gray-800'>
            Price <span className='text-xs'>/night</span>
          </p>
          <input type="number " placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24' value={inputs.pricePerNight} onChange={e => setInputs({ ...inputs, pricePerNight: e.target.value })} />
        </div>
      </div>

      {/*amenities */}
      <p className='text-gray-800 mt-4'>Amenities</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-gray-600'>
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <div key={index}>
            <input type="checkbox" id={`amenities${index + 1}`} checked={inputs.amenities[amenity]} onChange={() => setInputs({ ...inputs, amenities: { ...inputs.amenities, [amenity]: !inputs.amenities[amenity] } })} />
            <label htmlFor={`amenities${index + 1}`}> {amenity}</label>
          </div>
        ))}
      </div>
      <button className='bg-blue-500 text-white px-8 py-2 rounded mt-8 cursor-pointer w-full sm:w-auto'>
        Add Room
      </button>
    </form>
  )
}

export default AddRoom
