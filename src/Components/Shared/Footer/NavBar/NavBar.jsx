import React from 'react';
import user from '../../../../assets/user-1.png'
import { Link } from 'react-router-dom';
const NavBar = () => {



    const navItems = <>
    <li><Link to="/">Home</Link> </li>
    <li> <Link to="/login">LogIn</Link> </li>
    <li> <Link to="/alltoys">AllToys</Link> </li>
    <li> <Link to="/myToys">MyToys</Link> </li>
    <li> <Link to="/blogs">Blogs</Link> </li>

   <> 
     <li><Link to="/bookings">My Bookings</Link> </li>
  
    </>
     <li> <Link to="/logout">LogOut</Link> </li>
   
    </>


    return (


<div className="navbar bg-base-100 h-28 mb-4">
<div className="navbar-start">
    <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
        </ul>
    </div>
    <Link to="/" className=" m-6 text-xl">
        <img src='https://junotoys.themerex.net/wp-content/uploads/2021/08/logo.png' alt="" />
    </Link>
   <div className='d-flex mt-6'>
    <p className='text-center text-orange-500 font-bold'>KIDS</p>
   <p className='text-lime-500 font-bold'>TOYS AND GAMES </p>
   </div>
</div>
<div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navItems}
    </ul>
</div>
<div className="navbar-end">
<img className='w-20 h-20' src={user}/>
</div>
</div>
    );
};

export default NavBar;