import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import card1 from '../../../assets/home/01.jpg'
import card2 from '../../../assets/home/02.jpg'
import card3 from '../../../assets/home/03.png'

const ChefRecommends = () => {
    return (
        <div className="my-20">
            <SectionTitle heading={'Chef Recommends'} subHeading={'Should Try'} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10  justify-center items-center  place-items-center">
                {/* Card 1 */}
                <div className="bg-base-100 max-w-80 shadow ">
                    <figure className="">
                        <img
                            src={card1}
                            alt="Shoes"
                            className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-neutral text-black rounded-xl hover:text-white  border-black border-0 border-b-4 btn-outline">Order Now</button>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-base-100 max-w-80  shadow-sm">
                    <figure className="">
                        <img
                            src={card2}
                            alt="Shoes"
                            className="" />
                    </figure>
                    <div className="card-body items-center text-center max-w-96 ">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-neutral text-black rounded-xl hover:text-white  border-black border-0 border-b-4 btn-outline">Order Now</button>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-base-100  shadow-sm max-w-80">
                    <figure className="">
                        <img
                            src={card3}
                            alt="Shoes"
                            className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-neutral text-black rounded-xl hover:text-white  border-black border-0 border-b-4 btn-outline">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;