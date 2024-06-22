import { FaAd, FaCalendarAlt, FaExchangeAlt, FaHome, FaRegEnvelope, FaShoppingBag, FaShoppingCart, FaSyncAlt, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashbord = () => {


    const [isAdmin, isAdminLoading] = useAdmin();
    // const isAdmin = true

    if (isAdminLoading) {
        return <div>Loading...</div>;
    }

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
                    <ul className="menu p-4 space-y-5 w-80 h-full bg-base-200 text-base-content">
                        {/* Admin */}

                        {
                            isAdmin ? <>
                                <Link className="text-xl font-semibold flex items-center gap-3 " to="/dashbord/additem"> <FaUtensils /> Add Item</Link>
                                <Link className="text-xl font-semibold flex items-center gap-3 " to="/dashbord/manageitems"> <FaSyncAlt />  Manage Items</Link>
                                <Link className="text-xl font-semibold flex items-center gap-3 " to="/dashbord/allusers"> <FaUsers />  All Users</Link>
                                <Link className="text-xl font-semibold flex items-center gap-3 " to="/dashbord/bookings"> <FaUsers />  Manage Bokings</Link>

                            </> : <>

                                {/* Users */}

                                <Link className="text-xl font-semibold flex items-center gap-3 " to="/dashbord/user"> <FaHome /> User Home</Link>
                                <Link className="text-xl font-semibold flex items-center gap-3 " to="/dashbord/reservation"> <FaCalendarAlt />  Reservation</Link>
                                <Link className="text-xl font-semibold flex items-center gap-3 " to="/dashbord/paymenthistory"> <FaWallet />  Payment History</Link>
                                <Link className="text-xl font-semibold flex items-center gap-3 " to="/dashbord/cart"> <FaShoppingCart />  My Cart</Link>
                                <Link className="text-xl font-semibold flex items-center gap-3 " to="/dashbord/review"> <TbStarsFilled /> Add Review</Link>
                                <Link className="text-xl font-semibold flex items-center gap-3 " to="/dashbord/booking"> <FaUsers />  My Bokings</Link>

                            </>
                        }






                        <div className="divider"></div>

                        <Link className="text-xl font-semibold flex items-center gap-3 " to="/"> <FaHome />  Home</Link>
                        <Link className="text-xl font-semibold flex items-center gap-3 " to="/menu"> <FaUtensils />  Menu </Link>
                        <Link className="text-xl font-semibold flex items-center gap-3 " to="/shop"> <FaShoppingBag />  Shop</Link>
                        <Link className="text-xl font-semibold flex items-center gap-3 " to="/contact"> <FaRegEnvelope />  Contact</Link>


                    </ul>



                </div>
            </div>
        </div>
    );
};

export default Dashbord;