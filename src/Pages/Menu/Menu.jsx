import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuCover from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import SoupImg from '../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuCover} title={'Our Menu'} description={'Would you like to try a dish?'} />
            {/* Main Cover */}
            <SectionTitle subHeading={`don't mis`} heading={`Today's Offer`} />

            {/* Offered Menu items */}
            <MenuCategory items={offered} />

            {/* Dessert items */}
            <MenuCategory items={dessert} title={'dessert'} coverImg={dessertImg} />

            {/* Pizza items */}
            <MenuCategory items={pizza} title={'pizza'} coverImg={pizzaImg} />
            {/* Salad items */}
            <MenuCategory items={salad} title={'salad'} coverImg={saladImg} />
            {/* Salad items */}
            <MenuCategory items={soup} title={'soup'} coverImg={SoupImg} />
        </div>
    );
};

export default Menu;