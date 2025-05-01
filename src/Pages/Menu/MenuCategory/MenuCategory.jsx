import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="">
            {title && <Cover img={coverImg} title={title} />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 mb-5 ">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div className="flex justify-center my-5">
                <Link to={`/order/${title}`} className="btn btn-neutral text-black rounded-xl hover:text-white border-black border-0 border-b-4 btn-outline">Order Now</Link>
            </div>
        </div>
    );
};

export default MenuCategory;