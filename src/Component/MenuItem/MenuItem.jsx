
const MenuItem = ({ item }) => {
    const { name, price, recipe, image } = item;
    return (
        <div className="flex items-center shadow-lg p-3 rounded-lg ">
            <div>
                <div className=" w-32 overflow-hidden bg-cover  rounded-se-3xl  mr-5 rounded-es-3xl bg-gray-300">
                    <img className=" w-full" src={image} alt={name} />
                </div>
            </div>
            <div>
                <h4 className="text-xl font-semibold">{name}</h4>
                <p>{recipe}</p>
                <p className="font-bold">$ {price}</p>
            </div>
        </div>
    );
};

export default MenuItem;