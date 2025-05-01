import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');


    return (
        <section className="p-5 md:p-0">
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'} />
            <MenuCategory items={popular} />
            <div className="text-center mb-8 mt-4">
                <button className="bg-white border-b-2 rounded-md px-3 py-1 hover:bg-amber-100">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;