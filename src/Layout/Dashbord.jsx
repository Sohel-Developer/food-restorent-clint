import { FaCalendarAlt, FaExchangeAlt, FaHome, FaRegEnvelope, FaShoppingBag, FaShoppingCart, FaSyncAlt, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

const Dashbord = () => {

    const isAdmin = true;


    return (
        <div className="container">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                    <div className="w-full">
                        <Outlet />
                    </div>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Admin */}

                        {
                            isAdmin ? <>
                                <Link className="text-xl font-semibold  " to="/dashbord/additem"><li> <FaUtensils /> Add Item</li></Link>
                                <Link className="text-xl font-semibold  " to="/dashbord/manageitems"><li> <FaSyncAlt />  Manage Items</li></Link>
                                <Link className="text-xl font-semibold  " to="/dashbord/updateitem"><li><FaExchangeAlt /> Update Items</li></Link>
                                <Link className="text-xl font-semibold  " to="/dashbord/allusers"><li> <FaUsers />  All Users</li></Link>
                                <Link className="text-xl font-semibold  " to="/dashbord/bookings"><li> <FaUsers />  Manage Bokings</li></Link>

                            </> : <>

                                {/* Users */}

                                <Link className="text-xl font-semibold  " to="/dashbord/user"><li> <FaHome /> User Home</li></Link>
                                <Link className="text-xl font-semibold  " to="/dashbord/reservation"><li> <FaCalendarAlt />  Reservation</li></Link>
                                <Link className="text-xl font-semibold  " to="/dashbord/paymenthistory"><li> <FaWallet />  Payment History</li></Link>
                                <Link className="text-xl font-semibold  " to="/dashbord/cart"><li> <FaShoppingCart />  My Cart</li></Link>
                                <Link className="text-xl font-semibold  " to="/dashbord/review"><li> <TbStarsFilled /> Add Review</li></Link>
                                <Link className="text-xl font-semibold  " to="/dashbord/booking"><li> <FaUsers />  My Bokings</li></Link>

                            </>
                        }






                        <div className="divider"></div>

                        <Link className="text-xl font-semibold  " to="/"><li> <FaHome />  Home</li></Link>
                        <Link className="text-xl font-semibold  " to="/menu"><li> <FaUtensils />  Menu </li></Link>
                        <Link className="text-xl font-semibold  " to="/shop"><li> <FaShoppingBag />  Shop</li></Link>
                        <Link className="text-xl font-semibold  " to="/contact"><li> <FaRegEnvelope />  Contact</li></Link>


                    </ul>



                </div>
            </div>
        </div>
    );
};

export default Dashbord;