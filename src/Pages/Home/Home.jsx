import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <AboutUs />
            <PopularMenu />
            <CallUs />
            <ChefRecommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;