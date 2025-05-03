import { FaOpencart, FaRegUserCircle, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useAuth();


  const [cart] = useCart();


  // useEffect(() => {
    

  // }, [])

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Logout successful!');
      })
      .catch((error) => {
        // An error happened.
        toast.error('Logout failed!', error.message);
      });
  }

  const navLinks = (
    <>
      <li>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}>
          HOME
        </NavLink>
      </li>
      <li><NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}>CONTACT US</NavLink></li>
      <li><NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}>DASHBOARD</NavLink></li>
      <li><NavLink to="/menu" style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}>OUR MENU</NavLink></li>
      <li><NavLink to="/order/salad" style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}>ORDER FOOD</NavLink></li>
      <li><NavLink to="/secret" style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}>SECRET</NavLink></li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-black/60 text-white px-4 max-w-[1300px] mx-auto backdrop-blur-xs">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-extrabold leading-4">
          BISTRO BOSS<br />
          <span className="text-sm tracking-widest">RESTAURANT</span>
        </Link>
      </div>

      {/* Mobile Dropdown */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black/80 backdrop-blur-2xl rounded-box w-52">
          {navLinks}
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-bold ">
          {navLinks}
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Link to={'/dashboard/cart'} className="indicator mx-3">
          <span className="indicator-item badge bg-red-500/80 border-none badge-sm text-white font-bold ">{cart.length}</span>
          <button className="text-2xl "><FaShoppingCart /></button>
        </Link>
        {user ? (

          <button onClick={handleLogOut} className="font-bold border px-2 py-1 cursor-pointer">Logout</button>

        ) : (
          <Link to="/login" className="font-bold">Login</Link>

        )}
        {/* User Icon */}
        {
          user ? (
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full object-cover" />
            </div>
          ) : (
            <Link className="text-2xl"><FaRegUserCircle /></Link>
          )
        }
      </div>
    </div>
  );
};

export default NavBar;
