import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from "../../Component/Cover/Cover";
import shopCover from "../../assets/shop/banner2.jpg"
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../../Component/FoodCard/FoodCard';
import { useState } from 'react';


const ITEMS_PER_PAGE = 6;


const OurShop = () => {



    const [menu] = useMenu()
    const drinks = menu.filter((food) => food.category === "drinks")
    const dessert = menu.filter((food) => food.category === "dessert")
    const salad = menu.filter((food) => food.category === "salad")
    const pizza = menu.filter((food) => food.category === "pizza")
    const soups = menu.filter((food) => food.category === "soup")




    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Get the current page's data
    const saladItem = salad.slice(startIndex, endIndex);
    const drinksItem = drinks.slice(startIndex, endIndex);
    const dessertItem = dessert.slice(startIndex, endIndex);
    const pizzaItem = pizza.slice(startIndex, endIndex);
    const soupItem = soups.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <div>
            <Cover image={shopCover} heading="OUR SHOP" subHeading="Would you like to try a dish?" />

            <div className='container'>
                <section >
                    <Tabs>
                        <TabList className='flex justify-center uppercase text-2xl '>
                            <Tab>salad</Tab>
                            <Tab>pizza</Tab>
                            <Tab>Soups</Tab>
                            <Tab>desserts</Tab>
                            <Tab>drinks</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-10 my-10'>
                                {
                                    saladItem.map((food) => <FoodCard key={food._id} food={food} />)
                                }
                            </div>
                            <div className="flex justify-center mt-4">
                                {Array(Math.ceil(salad.length / ITEMS_PER_PAGE))
                                    .fill()
                                    .map((_, index) => (
                                        <button
                                            key={index + 1}
                                            onClick={() => handlePageChange(index + 1)}
                                            disabled={currentPage === index + 1}
                                            className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                                }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-10 my-10'>
                                {
                                    pizzaItem.map((food) => <FoodCard key={food._id} food={food} />)
                                }
                            </div>
                            <div className="flex justify-center mt-4">
                                {Array(Math.ceil(pizza.length / ITEMS_PER_PAGE))
                                    .fill()
                                    .map((_, index) => (
                                        <button
                                            key={index + 1}
                                            onClick={() => handlePageChange(index + 1)}
                                            disabled={currentPage === index + 1}
                                            className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                                }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-10 my-10'>
                                {
                                    soupItem.map((food) => <FoodCard key={food._id} food={food} />)
                                }
                            </div>
                            <div className="flex justify-center mt-4">
                                {Array(Math.ceil(soups.length / ITEMS_PER_PAGE))
                                    .fill()
                                    .map((_, index) => (
                                        <button
                                            key={index + 1}
                                            onClick={() => handlePageChange(index + 1)}
                                            disabled={currentPage === index + 1}
                                            className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                                }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-10 my-10'>
                                {
                                    dessertItem.map((food) => <FoodCard key={food._id} food={food} />)
                                }
                            </div>
                            <div className="flex justify-center mt-4">
                                {Array(Math.ceil(dessert.length / ITEMS_PER_PAGE))
                                    .fill()
                                    .map((_, index) => (
                                        <button
                                            key={index + 1}
                                            onClick={() => handlePageChange(index + 1)}
                                            disabled={currentPage === index + 1}
                                            className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                                }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-10 my-10'>
                                {
                                    drinksItem.map((food) => <FoodCard key={food._id} food={food} />)
                                }
                            </div>
                            <div className="flex justify-center mt-4">
                                {Array(Math.ceil(drinks.length / ITEMS_PER_PAGE))
                                    .fill()
                                    .map((_, index) => (
                                        <button
                                            key={index + 1}
                                            onClick={() => handlePageChange(index + 1)}
                                            disabled={currentPage === index + 1}
                                            className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                                }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                            </div>
                        </TabPanel>
                    </Tabs>

                </section>
            </div>

        </div>
    );
};

export default OurShop;