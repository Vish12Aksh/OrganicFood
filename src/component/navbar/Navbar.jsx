import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Searchbar from '../SearchBar/Searchbar'
import { useSelector } from 'react-redux'

// card 

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'));

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear('users');
        navigate('/login');
    }

    const carditems = useSelector((state) => state.card);


    // navbar data]
    const navlist = (
        <ul className='flex space-x-3 text-white font-medium text-md px-5'>
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All product */}
            <li>
                <Link to={'/allproduct'}>All product</Link>
            </li>

            {/* SignUp */}
            {!user ? <li>
                <Link to={'/signup'}>SignUp</Link>
            </li> : ""}

            {/* Login */}
            {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}>{user?.name}</Link>
            </li>}

            {/* Admin */}
            {user?.role === 'admin' && <li>
                <Link to={'/Admin-Dashboard'}>{user?.name}</Link>
            </li>
            }

            {/* logout */}
            {user && <li className=' cursor-pointer' onClick={logout}>
                logout
            </li>}

            {/* Card */}
            <li>
                <Link to={'/card'}>Card ({carditems.length})</Link>
            </li>
        </ul>
    )
    return (

        <nav className='bg-pink-600 sticky top-0'>
            {/* main */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
                {/* left */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className=" font-blod text-white text-2xl text-center">ORGANIC-FOOD</h2>
                    </Link>
                </div>

                {/* right */}
                <div className="right flex justify-center mb-4 lg:mb-0 ">
                    {navlist}
                </div>

                {/* Search bar */}
                <Searchbar />
            </div>
        </nav>
        
    )
}

export default Navbar
