import FoodCard from "../../../Component/FoodCard/FoodCard";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useFoodItem from "../../../Hooks/useFoodItem";



const Recommend = () => {
    const [foods] = useFoodItem()
    const popular = foods.filter((item) => item.category === "popular")


    return (
        <section className="container">
            <SectionTitle paragraphTitle="Should Try IT" headingTitle="Chef Recommends" />


            <div className="grid md:grid-cols-3 gap-20 my-10 ">
                {
                    popular.map((food) => <FoodCard food={food} key={food._id} />)
                }
            </div>

        </section>
    );
};

export default Recommend;