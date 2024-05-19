import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaTelegramPlane } from "react-icons/fa";
import loginImg from '../../assets/others/authentication2.png'
import useAuth from "../../Hooks/useAuth";
import { getAuth, updateProfile } from "firebase/auth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const SignUp = () => {
    const auth = getAuth();
    const { createUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation();
    const [axiosSecure] = useAxiosSecure()

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {


        const { Name, Image, Email, Password } = data

        // DB Save User
        const saveUser = { Name, Email };

        createUser(Email, Password)
            .then(Result => {
                console.log(Result.user);
                updateProfile(auth.currentUser, {
                    displayName: Name, photoURL: Image
                }).then(() => {
                    // Profile updated!

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
                            console.log(res);
                            toast.success("Welcome Our Shop")
                            navigate(from, { replace: true });
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                }).catch((error) => {
                    // An error occurred
                    // ...
                });

            })
            .then(err => { console.log(err) })

        console.log(data)
    };






    return (
        <div id='login' className="h-screen" >
            <div className='container'>
                <div className='px-20 md:pt-20 md:flex justify-between'>
                    <div>
                        <Link to="/"><p className='text-xl font-semibold flex items-center gap-2 cursor-pointer'> <FaArrowLeft /> Back To Home</p></Link>
                        <img src={loginImg} alt="" />
                    </div>

                    <div className='md:w-1/2'>
                        <form className=" space-y-4 md:space-y-10" onSubmit={handleSubmit(onSubmit)}>

                            <input type="text" placeholder="Your Name" {...register("Name", { required: true, maxLength: 80 })} className="input input-bordered w-full" />
                            <input type="email" className="input input-bordered w-full" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                            <input type="password" className="input input-bordered w-full" placeholder="Password" {...register("Password")} />
                            <input type="text" className="input input-bordered w-full" placeholder="Your-Image-Link" {...register("Image")} />

                            {/* Hide Captucha TODO: Show In Captcha */}
                            {/* <input type="text" className="input input-bordered w-full" placeholder="Reload Captcha" />
                            <input type="text" className="input input-bordered w-full" placeholder="Type Captcha" {...register("Captcha")} /> */}

                            <div className="flex  bg-gray-700 py-4 px-12 rounded-lg justify-center items-center gap-2">
                                <input className=" text-white font-semibold cursor-pointer" type="submit" value="SignUp" /> <FaTelegramPlane className="text-white" />
                            </div>
                        </form>

                        <div className='text-center space-y-3 mt-4'>
                            <p className='text-[#D1A054]'>Already registered? <Link to="/login">Go to log in</Link></p>

                            <p>Or sign in with</p>
                        </div>
                        <div className='flex justify-center my-5'>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;