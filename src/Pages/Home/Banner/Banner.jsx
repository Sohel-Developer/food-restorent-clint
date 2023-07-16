import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/01.jpg'
import slide2 from '../../../assets/home/02.jpg'
import slide3 from '../../../assets/home/03.png'
import slide4 from '../../../assets/home/04.jpg'
import slide5 from '../../../assets/home/05.png'
import slide6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full' src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide6} />
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default Banner;