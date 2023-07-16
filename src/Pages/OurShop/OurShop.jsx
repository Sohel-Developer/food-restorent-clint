import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from "../../Component/Cover/Cover";
import shopCover from "../../assets/shop/banner2.jpg"
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../../Component/FoodCard/FoodCard';



const OurShop = () => {


    const [menu] = useMenu()

    const drinks = menu.filter((food) => food.category === "drinks")
    const dessert = menu.filter((food) => food.category === "dessert")
    const salad = menu.filter((food) => food.category === "salad")
    const pizza = menu.filter((food) => food.category === "pizza")
    const soups = menu.filter((food) => food.category === "soup")


    return (
        <div>
            <Cover image={shopCover} heading="OUR SHOP" subHeading="Would you like to try a dish?" />

            <div className='container'>
                <section >
                    <Tabs>
                        <TabList className='flex justify-center uppercase text-2xl '>
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soups</Tab>
                            <Tab>Desserts</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-10 my-10'>
                                {
                                    salad.map((food) => <FoodCard key={food._id} food={food} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-10 my-10'>
                                {
                                    pizza.map((food) => <FoodCard key={food._id} food={food} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-10 my-10'>
                                {
                                    soups.map((food) => <FoodCard key={food._id} food={food} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-10 my-10'>
                                {
                                    dessert.map((food) => <FoodCard key={food._id} food={food} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-10 my-10'>
                                {
                                    drinks.map((food) => <FoodCard key={food._id} food={food} />)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </section>
            </div>

        </div>
    );
};

export default OurShop;