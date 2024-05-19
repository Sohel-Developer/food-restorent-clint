import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'

const Features = () => {
    return (
        <section className="max-w-7xl mx-auto hidden lg:block">
            <SectionTitle paragraphTitle="Order Now 9:00AM To 10:00PM " headingTitle="Our Category" />
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper grid sm:grid-cols-2 my-20"
                >
                    <SwiperSlide>
                        <div className="relative flex justify-center ">
                            <img src={image1} alt="" className="rounded-lg" />
                            <h2 className=" absolute text-white sm:text-3xl sm:bottom-5 bottom-2">saladS</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative flex justify-center ">
                            <img src={image2} alt="" className="rounded-lg" />
                            <h2 className=" absolute text-white sm:text-3xl sm:bottom-5 bottom-2">SOUPS</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative flex justify-center ">
                            <img src={image3} alt="" className="rounded-lg" />
                            <h2 className=" absolute text-white sm:text-3xl sm:bottom-5 bottom-2">pizzaS</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative flex justify-center ">
                            <img src={image4} alt="" className="rounded-lg" />
                            <h2 className=" absolute text-white sm:text-3xl sm:bottom-5 bottom-2">dessertS</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative flex justify-center ">
                            <img src={image5} alt="" className="rounded-lg" />
                            <h2 className=" absolute text-white sm:text-3xl sm:bottom-5 bottom-2">saladS</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>

        </section>
    );
};

export default Features;