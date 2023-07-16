import MenuItem from "../MenuItem/MenuItem";


const CategoryItem = ({ data }) => {
    return (
        <div className=" grid md:grid-cols-2 my-12 gap-10">
            {
                data.map((item) => <MenuItem item={item} key={item._id} />)
            }
        </div>
    );
};

export default CategoryItem;