import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { HiShoppingCart } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { BsCalendar2Heart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoMdMailUnread } from "react-icons/io";
import useCart from "../hooks/useCart";




const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex gap-4  min-h-screen">
            <div className="w-64 max-h-full bg-yellow-600/75">
                <div className=" p-5">
                    <Link to="/" className="text-xl font-extrabold leading-4">
                        BISTRO BOSS<br />
                        <span className="text-sm tracking-widest">RESTAURANT</span>
                    </Link>
                </div>
                <ul className="flex flex-col gap-3 p-4 uppercase font-medium ">

                    <li>
                        <NavLink to={'/dashboard/user-home'} className={({ isActive }) =>
                            `flex gap-2 items-center  ${isActive ? 'text-white' : 'text-black'}`
                        }>
                            <FaHome className="text-xl" />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reservation'} className={({ isActive }) =>
                            `flex gap-2 items-center     ${isActive ? 'text-white' : 'text-black'}`
                        }>
                            <SlCalender className={'text-xl'} />
                            reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/cart'} className={({ isActive }) =>
                            `flex gap-2 items-center     ${isActive ? 'text-white' : 'text-black'}`
                        }>
                            <HiShoppingCart className='text-xl' />
                            my cart <span className="text-black">({cart.length})</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/review'} className={({ isActive }) =>
                            `flex gap-2 items-center     ${isActive ? 'text-white' : 'text-black'}`
                        }>
                            <BsStars className='text-xl' />
                            add review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/my-bookings'} className={({ isActive }) =>
                            `flex gap-2 items-center     ${isActive ? 'text-white' : 'text-black'}`
                        }>
                            <BsCalendar2Heart className='text-xl' />
                            my booking
                        </NavLink>
                    </li>

                </ul>
                <div className=" mx-2 border-b border-1 border-white my-5"></div>

                <ul className="flex flex-col gap-3 p-4 uppercase font-medium ">
                    <li>
                        <NavLink to={'/dashboard/user-home'} className={({ isActive }) =>
                            `flex gap-2 items-center  ${isActive ? 'text-white' : 'text-black'}`
                        }>
                            <FaHome className="text-xl" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/user-home'} className={({ isActive }) =>
                            `flex gap-2 items-center  ${isActive ? 'text-white' : 'text-black'}`
                        }>
                            <GiHamburgerMenu className="text-xl" />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/user-home'} className={({ isActive }) =>
                            `flex gap-2 items-center  ${isActive ? 'text-white' : 'text-black'}`
                        }>
                            <HiMiniShoppingBag className="text-xl" />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/user-home'} className={({ isActive }) =>
                            `flex gap-2 items-center  ${isActive ? 'text-white' : 'text-black'}`
                        }>
                            <IoMdMailUnread className="text-xl" />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1  p-4">
                <Outlet />


            </div>
        </div>
    );
};

export default Dashboard;