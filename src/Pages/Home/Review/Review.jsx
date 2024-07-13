import React, { useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Review = () => {

    const auth = useAuth()
    console.log(auth?.user?.displayName);

    const [axiosSecure] = useAxiosSecure();


    const { refetch, data: reviews = [] } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await axiosSecure(`/review`)
            return res.data;

        },
    })






    return (
        <section className="container">

            <div className=''>

            </div>


            <div>

                <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <SectionTitle paragraphTitle="What Our Clients Say" headingTitle="TESTIMONIALS" />
                        <Swiper
                            spaceBetween={30}
                            effect={'fade'}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Navigation, Pagination]}
                            className="mySwiper"
                        >

                            {
                                reviews.map(review => <SwiperSlide key={review._id}>
                                    <div className="mx-auto max-w-2xl lg:max-w-4xl">

                                        <figure className="mt-10">
                                            <div className='flex justify-center py-5'>
                                                <Rating className='text-3xl'
                                                    initialRating={review?.ratingValue}
                                                    emptySymbol={<FaRegStar />}
                                                    fullSymbol={<FaStar />}
                                                    readonly
                                                />
                                            </div>
                                            <blockquote className="text-center space-y-4 text-gray-900 ">
                                                <p>
                                                    {review?.recipe}
                                                </p>
                                                <p className='font-semibold'>
                                                    {review?.suggestion}
                                                </p>
                                                <p className=''>{review?.description}
                                                </p>
                                            </blockquote>
                                            <figcaption className="mt-6">

                                                <div className="mb-8 flex items-center justify-center space-x-3 text-base">
                                                    <div className="font-semibold text-gray-900">{review?.name}</div>

                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>



                </section>
            </div>

        </section>
    );
};

export default Review;