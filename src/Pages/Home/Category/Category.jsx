import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // 🆕 Add this

// import required modules
import { Pagination, Navigation } from 'swiper/modules'; // 🆕 Include Navigation

import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'ORDER ONLINE'} />

            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                pagination={{ clickable: true }}
                navigation={true} // 🆕 Enable navigation buttons
                modules={[Pagination, Navigation]} // 🆕 Add Navigation module
                className="mySwiper mb-10"
            >


                <SwiperSlide>
                    <img src={slider1} alt="Slide 1" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white font-medium">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="Slide 2" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white font-medium">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="Slide 3" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white font-medium">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="Slide 4" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white font-medium">Cakes</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="Slide 1" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white font-medium">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="Slide 2" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white font-medium">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="Slide 3" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white font-medium">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="Slide 4" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white font-medium">Cakes</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;
