import Cover from "../Shared/Cover/Cover";
import orderBanner from '../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();



    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drink = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover img={orderBanner} title={'Order Food'} description={'Order Your Favorite Food'} />
            <div className="my-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'text-center'}>
                    <TabList>
                        <Tab>Salads</Tab>
                        <Tab>Pizzas</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab category={salad} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab category={pizza} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab category={soup} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab category={dessert} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab category={drink} />
                    </TabPanel>


                </Tabs>
            </div>
        </div>
    );
};

export default Order;