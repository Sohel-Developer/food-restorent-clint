import CategoryItem from "../../Component/CategoryItem/CategoryItem";
import Cover from "../../Component/Cover/Cover";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import menuCover from "../../assets/menu/banner3.jpg"
import dessertCover from "../../assets/menu/dessert-bg.jpeg"
import pizzaCover from "../../assets/menu/pizza-bg.jpg"
import saladCover from "../../assets/menu/salad-bg.jpg"
import soupCover from "../../assets/menu//soup-bg.jpg"

const OurMenu = () => {

    const [menu] = useMenu()

    const offerd = menu.filter((food) => food.category === "offered")
    const dessert = menu.filter((food) => food.category === "dessert")
    const salad = menu.filter((food) => food.category === "salad")
    const soups = menu.filter((food) => food.category === "soup")






    return (
        <div>

            <Cover image={menuCover} heading="OUR MENU" subHeading="Would you like to try a dish?" />
            {/* Offerd Section */}
            <section>
                <div className="container">
                    <SectionTitle headingTitle="TODAY'S OFFER" paragraphTitle="Don't Miss" />
                    <CategoryItem data={offerd} />
                </div>
            </section>
            {/* desserts Section */}

            <Cover image={dessertCover} heading="dessertS" subHeading="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.s" />
            <section>
                <div className="container">s
                    <CategoryItem data={dessert} />
                </div>
            </section>

            {/* pizza Section */}

            <Cover image={pizzaCover} heading="pizza" subHeading="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.s" />
            <section>
                <div className="container">s
                    <CategoryItem data={dessert} />
                </div>
            </section>
            {/* pizza Section */}

            <Cover image={saladCover} heading="salad" subHeading="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.s" />
            <section>
                <div className="container">s
                    <CategoryItem data={salad} />
                </div>
            </section>
            {/* pizza Section */}

            <Cover image={soupCover} heading="Soups" subHeading="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.s" />
            <section>
                <div className="container">s
                    <CategoryItem data={soups} />
                </div>
            </section>
        </div>
    );
};

export default OurMenu;