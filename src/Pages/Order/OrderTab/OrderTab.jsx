import FoodCard from "../../../components/FoodCard/FoodCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



const OrderTab = ({ category }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 place-items-center">
                        {
                            category.map(item => <FoodCard key={item._id} item={item} />)
                        }
                    </div>
                </SwiperSlide>

            </Swiper>
        </>

    );
};

export default OrderTab;