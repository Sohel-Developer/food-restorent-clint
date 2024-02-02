import CategoryItem from "../../../Component/CategoryItem/CategoryItem";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useFoodItem from "../../../Hooks/useFoodItem";


const Menu = () => {

    const [foods] = useFoodItem()
    const popular = foods.filter((item) => item.category === "popular")

    return (
        <section className="container">
            <SectionTitle paragraphTitle=" pleace Check It" headingTitle="OUR Top Menu" />
            <div className="my-10">
                <CategoryItem data={popular} />
            </div>
        </section>
    );
};

export default Menu;