import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaTelegramPlane } from "react-icons/fa";
import loginImg from '../../assets/others/authentication2.png'


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);




    return (
        <div id='login' >
            <div className='container'>
                <div className='px-20 py-40 flex justify-between'>
                    <div>
                        <Link to="/"><p className='text-xl font-semibold flex items-center gap-2 cursor-pointer'> <FaArrowLeft /> Back To Home</p></Link>
                        <img src={loginImg} alt="" />
                    </div>

                    <div className='w-1/2'>
                        <form className=" space-y-10" onSubmit={handleSubmit(onSubmit)}>

                            <input type="text" placeholder="Your Name" {...register("name", { required: true, maxLength: 80 })} className="input input-bordered w-full" />
                            <input type="email" className="input input-bordered w-full" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                            <input type="text" className="input input-bordered w-full" placeholder="Reload Captcha" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                            <input type="text" className="input input-bordered w-full" placeholder="Type Captcha" {...register("Captcha", { required: true, minLength: 6, maxLength: 12 })} />

                            <div className="flex  cursor-pointer bg-gray-700 py-4 px-12 rounded-lg justify-center items-center gap-2">
                                <input className=" text-white font-semibold" type="submit" value="Login" /> <FaTelegramPlane className="text-white" />
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