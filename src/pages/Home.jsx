import React from 'react';
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations.jsx';
import ExclusiveOffers from '../components/ExclusiveOffers.jsx';
import Testimonial from '../components/Testimonial.jsx';
import NewsLetter from '../components/NewsLetter.jsx';

const Home = () => {
  return (
    <>
        <Hero/>
        <FeaturedDestinations/>
        <ExclusiveOffers/>
        <Testimonial/>
        <NewsLetter/>
    </>
  )
}

export default Home
