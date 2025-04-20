import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Features.css'
const Featured = () => {
    return (
        <div className="featured-item py-14 bg-black/60 bg-blend-overlay text-white bg-fixed">
            <SectionTitle heading={'Featured Item'} subHeading={'check it out'} />
            <div className="md:flex justify-center items-center gap-10 py-8 px-16 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="space-y-3 ">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi nemo nulla labore ut, ea similique facilis praesentium reprehenderit doloribus quidem quos voluptates placeat sunt quaerat expedita magnam deleniti, vel et! Accusamus vitae fuga sunt laboriosam tempore aliquam debitis ducimus expedita, laborum, modi amet architecto delectus commodi corporis, nostrum incidunt.</p>
                    <button className="btn hover:bg-white hover:text-black text-white border-white border-0 border-b-4 btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;