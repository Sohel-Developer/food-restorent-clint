import { Link } from "react-router-dom";
import error from "../../assets/shop/404.gif"
import { FaArrowLeft } from "react-icons/fa";
const NotFound = () => {
    return (
        <div>
            <img src={error} alt="" />

            <Link to="/"><p className='text-xl font-semibold flex items-center gap-2 cursor-pointer'> <FaArrowLeft /> Back To Home</p></Link>

        </div>
    );
};

export default NotFound;