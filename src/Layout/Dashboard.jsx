import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { HiShoppingCart } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { BsCalendar2Heart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoMdMailUnread } from "react-icons/io";
import useCart from "../hooks/useCart";
import { ImSpoonKnife } from "react-icons/im";
import { CgMenuGridO } from "react-icons/cg";
import { FaBook } from "react-icons/fa6";
import useAdmin from '../hooks/useAdmin'



const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    console.log('admin', isAdmin);
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

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to={'/dashboard/admin-home'} className={({ isActive }) =>
                                    `flex gap-2 items-center  ${isActive ? 'text-white' : 'text-black'}`
                                }>
                                    <FaHome className="text-xl" />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/add-items'} className={({ isActive }) =>
                                    `flex gap-2 items-center     ${isActive ? 'text-white' : 'text-black'}`
                                }>
                                    <ImSpoonKnife className={'text-xl'} />
                                    add items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manage-items'} className={({ isActive }) =>
                                    `flex gap-2 items-center     ${isActive ? 'text-white' : 'text-black'}`
                                }>
                                    <CgMenuGridO className='text-xl' />
                                    manage items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/bookings'} className={({ isActive }) =>
                                    `flex gap-2 items-center     ${isActive ? 'text-white' : 'text-black'}`
                                }>
                                    <FaBook className='text-xl' />
                                    Manage bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/users'} className={({ isActive }) =>
                                    `flex gap-2 items-center     ${isActive ? 'text-white' : 'text-black'}`
                                }>
                                    <FaUsers className='text-xl' />
                                    all users
                                </NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to={'/dashboard/user-home'} className={({ isActive }) =>
                                        `flex gap-2 items-center  ${isActive ? 'text-white' : 'text-black'}`
                                    }>
                                        <FaHome className="text-xl" />
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/history'} className={({ isActive }) =>
                                        `flex gap-2 items-center     ${isActive ? 'text-white' : 'text-black'}`
                                    }>
                                        <SlCalender className={'text-xl'} />
                                        Payment History
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
                                    <NavLink to={'/dashboard/payment-history'} className={({ isActive }) =>
                                        `flex gap-2 items-center     ${isActive ? 'text-white' : 'text-black'}`
                                    }>
                                        <BsCalendar2Heart className='text-xl' />
                                        payment history
                                    </NavLink>
                                </li>
                            </>
                    }

                </ul>
                <div className=" mx-2 border-b border-1 border-white my-5"></div>

                <ul className="flex flex-col gap-3 p-4 uppercase font-medium ">
                    <li>
                        <NavLink to={'/'} className={({ isActive }) =>
                            `flex gap-2 items-center  ${isActive ? 'text-white' : 'text-black'}`
                        }>
                            <FaHome className="text-xl" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/menu'} className={({ isActive }) =>
                            `flex gap-2 items-center  ${isActive ? 'text-white' : 'text-black'}`
                        }>
                            <GiHamburgerMenu className="text-xl" />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/salad'} className={({ isActive }) =>
                            `flex gap-2 items-center  ${isActive ? 'text-white' : 'text-black'}`
                        }>
                            <HiMiniShoppingBag className="text-xl" />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} className={({ isActive }) =>
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