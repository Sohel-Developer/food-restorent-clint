
const FoodCard = ({ food }) => {

    const { name, price, recipe, image } = food;

    return (

        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>

            <div className="card-body">
                <span className="badge bg-[#E8E8E8] p-4 font-bold text-xl">${price}</span>
                <h2 className="text-2xl font-semibold w-full">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions ">
                    <button className="btn btn-outline w-full mt-4  border-none hover:bg-black text-[#BB8506] border-b-4  bg-[#E8E8E8]">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;