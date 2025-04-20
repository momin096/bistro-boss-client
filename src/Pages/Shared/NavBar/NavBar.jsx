import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}>
          HOME
        </NavLink>
      </li>
      <li><NavLink to="/contact">CONTACT US</NavLink></li>
      <li><NavLink to="/dashboard">DASHBOARD</NavLink></li>
      <li><NavLink to="/menu">OUR MENU</NavLink></li>
      <li><NavLink to="/shop">OUR SHOP</NavLink></li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-black/60 text-white px-4 max-w-[1300px] mx-auto backdrop-blur-2xl">
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
        <div className="indicator">
          <span className="indicator-item badge badge-error badge-sm">1</span>
          <button className="text-xl"><FaShoppingCart /></button>
        </div>
        <button className="font-bold">SIGN OUT</button>
        <button className="text-2xl"><FaUserCircle /></button>
      </div>
    </div>
  );
};

export default NavBar;
