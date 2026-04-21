import React from 'react';
import { Assets } from '../assets/Assets';
import Title from './Title.jsx';

const NewsLetter = () => {
    return (
        <div className='flex flex-col items-center w-full max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white'>
            <Title title='NewsLetter' subTitle='Stay informed to our latest updates and discover new destinations and attractive offers!'/>

            <div className='flex flex-col md:flex-row items-center justify-center gap-4 mt-6 '>
                <input type="text" className='bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full' placeholder='Enter Your Email' />
                <button className='flex justify-center items-center gap-2 bg-black group px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all'>Subscribe
                    <img src={Assets.arrowIcon} alt="arrowIcon" className='w-3.5 invert group-hover:translate-x-1 transition-all' />
                </button>
            </div>
            <p className='text-gray-500 mt-6 text-xs text-center'>By subscribing,you agree to our privacy policy & consent to recieve updates.</p>
        </div>
    )
}

export default NewsLetter
