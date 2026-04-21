import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Booking from './pages/Booking.jsx'

import Home from './pages/Home.jsx'
import HotelDetails from './pages/HotelDetails.jsx'
import Hotels from './pages/Hotels.jsx'
import NotFound from './pages/NotFound.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import { ToastContainer } from "react-toastify"
import Profile from './components/Profile.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Layout from './pages/hotelOwner/Layout.jsx'
import Dashboard from './pages/hotelOwner/Dashboard.jsx'
import AddRoom from './pages/hotelOwner/AddRoom.jsx'
import ListRoom from './pages/hotelOwner/ListRoom.jsx'
import SpecialOffers from './pages/SpecialOffers.jsx'


const router = createBrowserRouter([

  {

    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "hotels", element: <Hotels /> },
      { path: "hotelDetails/:id", element: <ProtectedRoute><HotelDetails /></ProtectedRoute> },
      { path: "booking", element: <ProtectedRoute><Booking /></ProtectedRoute> },
      { path: "specialOffers", element: <SpecialOffers /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
      { path: "*", element: <NotFound /> },

      // OWNER NESTED ROUTES
      {
        path: "owner",
        element: <ProtectedRoute><Layout /></ProtectedRoute>,   // Owner layout
        children: [
          { index: true, element: <Dashboard /> },   // /owner
          { path: "add-room", element: <AddRoom /> }, // /owner/add-room
          { path: "list-room", element: <ListRoom /> } // /owner/list-room
        ]
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
