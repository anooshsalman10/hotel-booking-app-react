import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi"
import { Search } from 'lucide-react'
import { auth } from './Firebase.jsx' // Track in logged in user (important)
import { onAuthStateChanged, signOut } from 'firebase/auth'


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);// add and define user for show/hide login feature

  useEffect(() => { // listen for login/logout
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleLogout = async () => { // handle logout feature
    await signOut(auth);
  };

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur'>
      <div className='px-4 py-4'>

        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <div className="flex items-center">
            <Link to='/'>
              <img src="/logo2.png" alt="logo" className="w-12 mx-4 rounded-full" />
            </Link>

            <Link to='/'>
              <h1 className='text-2xl text-white font-bold my-2  '>
                Wander <span className='text-red-500'>Nest</span>
              </h1>
            </Link>
          </div>

          <div className='flex justify-between items-center gap-6'>
            <nav className='hidden md:flex gap-6 items-center'>
              <ul className='flex gap-10 text-white font-semibold mx-20'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/hotels">Hotels</Link></li>
                <li><Link to="/specialOffers">Special Offers</Link></li>
                <li><Link to="/booking">Booking</Link></li>
              </ul>

              <div className="flex gap-2">
                <Link to="/owner">
                  <button className='bg-red-500 text-white px-3 py-1 font-semibold rounded-full'>
                    Dashboard
                  </button>
                </Link>

               <Link to="/register">
                <button className='bg-red-500 text-white px-3 py-2 font-semibold rounded-md flex gap-1 items-center'><Search className='w-4 h-4' />
                </button>
                </Link>

                <div className="flex gap-2 items-center">

                  {user ? (
                    <>
                      {/* Profile Image */}
                      <img
                        src={user.photoURL || "/logo2.png"}
                        alt="profile"
                        className="w-8 h-8 rounded-full"
                      />

                      {/* Optional Name */}
                      <span className="text-white text-sm">
                        {user.displayName || "User"}
                      </span>

                      {/* Logout */}
                      <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link to="/login">
                      <button className="bg-red-500 text-white px-3 py-1 font-semibold rounded-md">
                        Login
                      </button>
                    </Link>
                  )}

                </div>


              </div>
            </nav>


            {/* Mobile Icon */}
            <HiMenuAlt1
              onClick={toggleMenu}
              className='cursor-pointer md:hidden text-white'
              size={30}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {
          showMenu && (
            <div className=" flex flex-col md:hidden bg-black text-white p-5 space-y-3">
              <Link to="/">Home</Link>
              <Link to="/hotels">Hotels</Link>
              <Link to="/specialOffers">Special Offers</Link>
              <Link to="/booking">Booking</Link>
              <Link to="/owner">
                <button className='bg-red-500 text-white px-1 py-1 font-semibold rounded-full'>
                  Dashboard
                </button>
              </Link>
              {user ? (
                <>
                  {/* Profile Image */}
                  <img
                    src={user.photoURL || "/logo2.png"}
                    alt="profile"
                    className="w-8 h-8 rounded-full"
                  />
                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login">
                  <button className="bg-red-500 text-white px-3 py-1 font-semibold rounded-md">
                    Login
                  </button>
                </Link>
              )}
            </div>
          )
        }

      </div >
    </header >
  )
}
export default Navbar