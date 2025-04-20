import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { DiAsterisk } from "react-icons/di";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="p-5 md:p-0">
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    menu.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="text-center mb-8 mt-4">
                <button className="bg-white border-b-2 rounded-md px-3 py-1 hover:bg-amber-100">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;