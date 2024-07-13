
import Rating from 'react-rating';
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useState } from "react";
import { useForm } from "react-hook-form"


import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaTelegramPlane } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from '../../../Hooks/useAuth';


const Review = () => {
    const auth = useAuth() // User Gate Information
    const [axiosSecure] = useAxiosSecure()
    const [ratingValue, setRatingValue] = useState(0);



    // Function to handle rating change
    const handleRatingChange = (value) => {

        console.log(value);
        setRatingValue(value);
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {

        const { recipe, suggestion, description } = data

        const reviewData = { recipe, suggestion, description, ratingValue, name: auth?.user?.displayName }


        axiosSecure.post('/review', reviewData)
            .then(function () {
                toast.success("Thank You For Valuable Review")
                reset()
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    return (
        <section>
            <SectionTitle paragraphTitle="Sharing is Caring!" headingTitle="GIVE A REVIEW..." />



            <div className=" w-full pt-5">
                <div className='text-center space-y-5 '>
                    <h2 className='text-2xl'>Rate, Us</h2>
                    <Rating className='text-3xl'
                        initialRating={ratingValue}
                        onChange={handleRatingChange}
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                    />


                </div>
                <div className="w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-10 space-y-4 bg-gray-100 m-10 rounded-lg">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Which recipe you liked most?</span>
                            </label>
                            <input {...register("recipe")} type="text" placeholder="Recipe you liked most" className="input input-bordered" />

                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Do you have any suggestion for us?</span>
                            </label>
                            <input {...register("suggestion")} type="text" placeholder="Sugggestion" className="input input-bordered" />

                        </div>



                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Kindly express your care in a short way.</span>
                            </label>
                            <textarea {...register("description")} className="textarea textarea-bordered w-full" placeholder="Review in detail" >

                            </textarea>

                        </div>
                        <div className="flex flex-col items-start space-y-4">


                            <span className="cursor-pointer py-4 px-8 bg-gray-500 rounded-lg flex items-center gap-2">
                                <input type="submit" className=" cursor-pointer text-white text-xl font-semibold " value="Send Review" />
                                <FaTelegramPlane className="text-white text-xl" />
                            </span>
                        </div>




                    </form>
                </div>
            </div>
        </section >
    );
};

export default Review;