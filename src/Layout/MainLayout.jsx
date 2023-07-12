import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <h2>Footer</h2>
        </div>
    );
};

export default MainLayout;