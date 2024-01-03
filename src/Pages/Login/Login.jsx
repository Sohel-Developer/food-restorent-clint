
import { useForm } from 'react-hook-form';
import { FaArrowLeft, FaTelegramPlane } from 'react-icons/fa';

import loginImg from '../../assets/others/authentication2.png'
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useContext(AuthContext)

    const from = location.state?.from?.pathname || "/";


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signIn(data?.email, data?.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Successfuly Login")
            })

        navigate(from, { replace: true });
    }

















    return (
        <div id='login' className='h-screen' >
            <div className='container'>
                <div className='px-20 md:py-40 md:flex justify-between'>
                    <div>
                        <Link to="/"><p className='text-xl font-semibold flex items-center gap-2 cursor-pointer'> <FaArrowLeft /> Back To Home</p></Link>
                        <img src={loginImg} alt="" />
                    </div>

                    <div className='md:w-1/2'>
                        <form className=" space-y-4 md:space-y-10" onSubmit={handleSubmit(onSubmit)}>


                            <input type="email" className="input input-bordered w-full" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                            <input type="password" className="input input-bordered w-full" placeholder="Your Password" {...register("password", { required: true, minLength: 6, maxLength: 12 })} />

                            <div className="flex   bg-gray-700 py-4 px-12 rounded-lg justify-center items-center gap-2">
                                <input className=" text-white font-semibold cursor-pointer" type="submit" value="Login" /> <FaTelegramPlane className="text-white" />
                            </div>
                        </form>

                        <div className='text-center space-y-3 mt-4'>
                            <p className='text-[#D1A054]'>New here? <Link to="/signup">Create a New Account</Link></p>
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

export default Login;