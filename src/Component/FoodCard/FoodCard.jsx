import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ food }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth()
    const [, refetch] = useCart()

    const [btnSwap, setBtnSwap] = useState(false)

    const { name, price, recipe, image, _id } = food;

    const handleCartItem = (item) => {

        if (user) {

            setBtnSwap(!btnSwap)

            const cartItem = { foodId: _id, name, image, price, email: user.email, status: "buy" }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart

                        alert("Added your food")
                    }
                })



        } else {
            alert("Pleace Login Now")
            navigate('/login', { state: { from: location } })
        }






        console.log(item);
    }




    return (

        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>

            <div className="card-body">
                <span className="badge bg-[#E8E8E8] p-4 font-bold text-xl">${price}</span>
                <h2 className="text-2xl font-semibold w-full">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions ">

                    {
                        btnSwap ? <button className="btn btn-outline w-full mt-4  border-none hover:bg-black text-[#BB8506] border-b-4  bg-[#E8E8E8]">Already Buy Now</button> : <button onClick={() => handleCartItem(food)} className="btn btn-outline w-full mt-4  border-none hover:bg-black text-[#BB8506] border-b-4  bg-[#E8E8E8]">Buy Now</button>
                    }




                </div>

            </div>
        </div>

    );
};

export default FoodCard;