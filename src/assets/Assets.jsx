import React from 'react'
import google from './google.png';
import heroImg1 from './heroImg1.jpg';
import testimonials1 from './testimonials1.jpg';
import testimonials2 from './testimonials2.jpg';
import testimonials3 from './testimonials3.jpg';
import badgeIcon from './badgeIcon.png';
import freeBreakFastIcon from './freeBreakFastIcon.svg';
import handPlatter from './handplatter.svg';
import heartIcon from './heartIcon.png';
import homeIcon from './homeIcon.png';
import locationIcon from './locationIcon.png';
import mountain from './mountain.svg';
import swimming from './swimming.svg';
import wifi from './wifi.svg';
import roomImg1 from './roomImg1.jpg';
import roomImg2 from './roomImg2.jpg';
import roomImg3 from './roomImg3.jpg';
import roomImg4 from './roomImg4.jpg';
import testimonial1 from './testimonial1.jpg';
import exclusiveOffer1 from './exclusiveOffer1.jpg';
import exclusiveOffer2 from './exclusiveOffer2.jpg';
import exclusiveOffer3 from './exclusiveOffer3.jpg';
import starIcon from './starIcon.png';
import arrowIcon from './arrowIcon.png';
import starIconOutline from './starIconOutline.png';
import instagramIcon from './instagramIcon.png';
import facebookIcon from './facebookIcon.png';
import twitterIcon from './twitterIcon.png';
import linkedinIcon from './linkedinIcon.png';
import guestsIcon from './guestsIcon.png';
import closeIcon from './closeIcon.png';
import regImg from './regImg.jpg';
import addIcon from './addIcon.png';
import listIcon from './listIcon.png';
import dashboardIcon  from './dashboardIcon.png';
import totalRevenueIcon from './totalBookingIcon.png';
import totalBookingIcon from './totalRevenueIcon.png';
import uploadArea from './uploadArea.png';
import exclusiveOffer4 from'./exclusiveOffer4.jpg';
import exclusiveOffer5 from'./exclusiveOffer5.jpg';
import exclusiveOffer6 from'./exclusiveOffer6.jpg';

export const Assets = {
    google,
    heroImg1,
    testimonial1,
    testimonials1,
    testimonials2,
    testimonials3,
    badgeIcon,
    freeBreakFastIcon,
    handPlatter,
    heartIcon,
    homeIcon,
    locationIcon,
    mountain,
    swimming,
    wifi,
    roomImg1,
    roomImg2,
    roomImg3,
    roomImg4,
    exclusiveOffer1, 
    exclusiveOffer2, 
    exclusiveOffer3,
    starIcon,
    arrowIcon,
    starIconOutline,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkedinIcon,
    guestsIcon,
    closeIcon,
    regImg,
    addIcon,
    listIcon,
    dashboardIcon,
    totalBookingIcon,
    totalRevenueIcon,
    uploadArea,
    exclusiveOffer4,
    exclusiveOffer5,
    exclusiveOffer6,
};

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
    "Bali"
]

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "summer package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOffer1 },
    { _id: 2, title: "Luxury Retreat", description: "Book two months in advance and save your stay at our luxury resorts worldwide", priceOff: 30, expiryDate: "Sept 31", image: exclusiveOffer2 },
    { _id: 3, title: "Romantic Destination", description: "Special couples package including salon treatments", priceOff: 25, expiryDate: "Oct 31", image: exclusiveOffer3 },
]

// Special Offers Dummy Data
export const specialOffers = [
    { _id: 1, title: "summer package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOffer1 },
    { _id: 2, title: "Luxury Retreat", description: "Book two months in advance and save your stay at our luxury resorts worldwide", priceOff: 30, expiryDate: "Sept 31", image: exclusiveOffer2 },
    { _id: 3, title: "Romantic Destination", description: "Special couples package including salon treatments", priceOff: 25, expiryDate: "Oct 31", image: exclusiveOffer3 },
    { _id: 4, title: "Family Holiday", description: "Enjoy special discount on more than one family", priceOff: 25, expiryDate: "July 15", image: exclusiveOffer1 },
    { _id: 5, title: "Function Arrangements", description: "Book in advance & get special discount on function arrangements", priceOff: 30, expiryDate: "Oct 10", image: exclusiveOffer2 },
    { _id: 6, title: "Free Transport", description: "Special discounts on travel facility", priceOff: 25, expiryDate: "Dec 31", image: exclusiveOffer3 },
]


//Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Emma Watson", address: "Paris,France", image: testimonials2, rating: 5, review: "I have used a lot of booking platforms in the past, but my experience with WanderNest has been the best one so far! Their selection of hotels is unmatched" },
    { id: 2, name: "Liam Hemsworth", address: "Barcelona,Spain", image: testimonials1, rating: 4, review: "WanderNest has exceeded my expectations.The booking process was seamless, the hotels were luxurious and  absolutely top-notch. Highly Recommended!" },
    { id: 3, name: "Henry Cavill", address: "Ankara,Turkey", image: testimonials3, rating: 4, review: "WanderNest has amazing serivce! I always find best luxury accomodations through this platform. Their recommendations have never disappointed me." },

];

// Facility Icons

export const facilityIcons = {
    "Free Wifi": Assets.wifi,
    "Free Breakfast": Assets.freeBreakFastIcon,
    "Room Service": Assets.handPlatter,
    "Mountain View": Assets.mountain,
    "Pool Access": Assets.swimming,
};

// for Room Details Page
export const roomCommonData = [
    { icon: Assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygenic space just for you." },
    { icon: Assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Airbnb's strict cleaning standards." },
    { icon: Assets.locationIcon, title: "Excellent Location", description: "95% of the guests have rated the location 5-stars" },
    { icon: Assets.heartIcon, title: "Smooth-Check-In", description: "Majority of the guests have given check-in a 5-star rating" },
];

//Hotel Dummy Data
export const hotelDummyData = {
    "_id": "67f76397852ac456e4089b72",
    "name": "Pearl Continental",
    "address": "Main Road,123 Street,23 Colony",
    "contact": "+9230666662288",
    "owner": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": hotelDummyData,
        "roomType": "Luxury Room",
        "pricePerNight": "399",
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:22:11.456Z",
        "updatedAt": "2025-04-10T06:22:11.456Z",
        "__v": 0
    },
    {
        "_id": "67f7647c197ac559e4089b8e",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": "299",
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:22:11.953Z",
        "updatedAt": "2025-04-10T06:22:11.953Z",
        "__v": 0
    },
    {
        "_id": "67f7647c197ac559e4089b82",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": "249",
        "amenities": ["Free Wifi", "Free Breakfast", "Room Service"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:22:11.825Z",
        "updatedAt": "2025-04-10T06:22:11.825Z",
        "__v": 0
    },
    {
        "_id": "67f7647c197ac559e4089b7a",
        "hotel": hotelDummyData,
        "roomType": "single Bed",
        "pricePerNight": "149",
        "amenities": ["Free Wifi", "Free Breakfast", "Room Service"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:22:11.825Z",
        "updatedAt": "2025-04-10T06:22:11.825Z",
        "__v": 0
    }
];

//User Dummy Data
export const userDummyData = {
    "id": "user-dcjh9r4fti4yrhf47w8hp",
    "username": "Goldie Hwan",
    "email": "user.goldiehwan@gmail.com",
    "image": testimonial1,
    "role": "hotelOwner",
    "createdAt": "2025-04-25T09:29:16.367Z",
    "updatedAt": "2025-04-25T09:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

//User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "id": "67f7647c197ac559e403b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-27T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-25T09:29:16.529Z",
        "updatedAt": "2025-04-25T09:34:48.520Z",
        "__v": 0,
    },
    {
        "id": "67f7647c197ac559e403b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-25T09:29:16.873Z",
        "updatedAt": "2025-04-25T09:34:48.873Z",
        "__v": 0,
    },

    {
        "id": "67f7647c197ac559e403b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-25T09:29:16.873Z",
        "updatedAt": "2025-04-25T09:34:48.873Z",
        "__v": 0,
    }
];

export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 680,
  bookings: [
    {
      user: { username: "Bella" },
      room: { roomType: "Double Bed" },
      totalPrice: 499,
      isPaid: false,
    },
    {
      user: { username: "Goldie" },
      room: { roomType: "Double Bed" },
      totalPrice: 499,
      isPaid: true,
    },
    {
      user: { username: "Edward" },
      room: { roomType: "Single Bed" },
      totalPrice: 499,
      isPaid: false,
    },
  ],
};
