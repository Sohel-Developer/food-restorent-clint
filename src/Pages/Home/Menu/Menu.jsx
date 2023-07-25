import CategoryItem from "../../../Component/CategoryItem/CategoryItem";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMenu from '../../../Hooks/useMenu';


const Menu = () => {

    const [menu] = useMenu()
    const popular = menu.filter((item) => item.category === "popular")

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