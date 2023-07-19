import { FaExchangeAlt, FaHome, FaRegEnvelope, FaShoppingBag, FaSyncAlt, FaUsers, FaUtensils } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashbord = () => {
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
                        {/* Sidebar content here */}
                        <Link className="text-xl font-semibold  " to="/dashbord/additem"><li><a> <FaUtensils /> Add Item</a></li></Link>
                        <Link className="text-xl font-semibold  " to="/dashbord/manageitems"><li><a> <FaSyncAlt />  Manage Items</a></li></Link>
                        <Link className="text-xl font-semibold  " to="/dashbord/updateitem"><li><a><FaExchangeAlt /> Update Items</a></li></Link>
                        <Link className="text-xl font-semibold  " to="/dashbord/allusers"><li><a> <FaUsers />  All Users</a></li></Link>
                        <Link className="text-xl font-semibold  " to="/dashbord/bokings"><li><a> <FaUsers />  Manage Bokings</a></li></Link>


                        <div className="divider"></div>

                        <Link className="text-xl font-semibold  " to="/"><li><a> <FaHome />  Home</a></li></Link>
                        <Link className="text-xl font-semibold  " to="/menu"><li><a> <FaUtensils />  Menu </a></li></Link>
                        <Link className="text-xl font-semibold  " to="/shop"><li><a> <FaShoppingBag />  Shop</a></li></Link>
                        <Link className="text-xl font-semibold  " to="/contact"><li><a> <FaRegEnvelope />  Contact</a></li></Link>


                    </ul>



                </div>
            </div>
        </div>
    );
};

export default Dashbord;