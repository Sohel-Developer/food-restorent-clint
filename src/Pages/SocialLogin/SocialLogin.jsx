import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";



const SocialLogin = () => {



    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [axiosSecure] = useAxiosSecure()

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { Name: loggedInUser.displayName, Email: loggedInUser.email }
                // fetch('http://localhost:5000/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(saveUser)
                // })
                //     .then(res => res.json())
                //     .then(() => {
                //         navigate(from, { replace: true });
                //     })

                axiosSecure.post('/users', saveUser)
                    .then(function (res) {
                        toast.success("Welcome Our Shop")
                        navigate(from, { replace: true });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });







            })
    }




    return (
        <div>
            <span onClick={handleGoogleSignIn}><FaGoogle className=" border-2 border-gray-800 cursor-pointer text-5xl p-2 rounded-full" /></span>
        </div>
    );
};

export default SocialLogin;