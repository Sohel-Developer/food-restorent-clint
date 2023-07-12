import MenuItem from "../../../Component/MenuItem/MenuItem";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const Menu = () => {
    return (
        <section className="container">
            <SectionTitle paragraphTitle=" pleace Check It" headingTitle="OUR Menu" />
            <div className="my-10">
                <MenuItem />
            </div>
        </section>
    );
};

export default Menu;