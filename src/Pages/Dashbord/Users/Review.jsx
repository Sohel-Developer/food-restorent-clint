
import ReactRating from 'react-rating';
import Rating from 'react-rating';
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useState } from "react";
// import { Rating } from 'react-simple-star-rating'

import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaTelegramPlane } from 'react-icons/fa';


const Review = () => {
    const [ratingValue, setRatingValue] = useState(0);

    // Function to handle rating change
    const handleRatingChange = (value) => {
        console.log(value);
        setRatingValue(value);
    }


    // const [rating, setRating] = useState(0)

    // // Catch Rating value
    // const handleRating = (rate) => {
    //     setRating(rate)

    //     // other logic
    // }
    // console.log(rating);

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
                    <form className="p-10 space-y-4 bg-gray-100 m-10 rounded-lg">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Which recipe you liked most?</span>
                            </label>
                            <input type="text" placeholder="Recipe you liked most" className="input input-bordered" />

                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Do you have any suggestion for us?</span>
                            </label>
                            <input type="text" placeholder="Sugggestion" className="input input-bordered" />

                        </div>



                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Kindly express your care in a short way.</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full" placeholder="Review in detail" >

                            </textarea>

                        </div>
                        <div className="flex flex-col items-start space-y-4">


                            <span className="cursor-pointer py-4 px-8 bg-gray-500 rounded-lg flex items-center gap-2">
                                <input type="submit" className=" text-white text-xl font-semibold " value="Send Review" />
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