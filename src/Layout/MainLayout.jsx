import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Outlet />
            <h2>Footer</h2>
        </div>
    );
};

export default MainLayout;