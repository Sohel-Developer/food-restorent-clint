import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const FoodCard = ({ food }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth()
    const [carts, refetch] = useCart()
    const [axiosSecure] = useAxiosSecure();

    const { name, price, recipe, image, _id } = food;

    const handleCartItem = () => {




        if (user) {


            const cartItem = { foodId: _id, name, image, price, email: user.email, status: "buy" }
            // fetch('http://localhost:5000/carts', {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(cartItem)
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.insertedId) {
            //             refetch(); // refetch cart to update the number of items in the cart

            //             alert("Added your food")
            //         }
            //     })


            axiosSecure.post('/carts', cartItem)
                .then(function () {
                    refetch()
                    toast.success("Your Item Added")
                })
                .catch(function (error) {
                    console.log(error);
                });




        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "Need a Food",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes..!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   });
                    toast.success('Thank You Pleace Login Now.!')

                    navigate('/login', { state: { from: location } })
                }
            });




            // alert("Pleace Login Now")
            // navigate('/login', { state: { from: location } })
        }
    }




    return (

        <div className="card bg-base-100 shadow-xl">
            <img src={image} className="rounded-ss-md  rounded-se-md" alt={name} />

            <div className="card-body">
                <span className="badge bg-[#E8E8E8] p-4 font-bold text-xl">${price}</span>
                <h2 className="text-2xl font-semibold w-full">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions ">
                    {
                        carts.find((item => item.foodId === _id)) ? <button className="btn btn-outline w-full mt-4  border-none hover:bg-black text-[#BB8506] border-b-4  bg-[#E8E8E8]">Already Buy Now</button> : <button onClick={() => handleCartItem()} className="btn btn-outline w-full mt-4  border-none hover:bg-black text-[#BB8506] border-b-4  bg-[#E8E8E8]">Buy Now</button>
                    }

                    {/* {
                        btnSwap ? <button className="btn btn-outline w-full mt-4  border-none hover:bg-black text-[#BB8506] border-b-4  bg-[#E8E8E8]">Already Buy Now</button> : <button onClick={() => handleCartItem()} className="btn btn-outline w-full mt-4  border-none hover:bg-black text-[#BB8506] border-b-4  bg-[#E8E8E8]">Buy Now</button>
                    } */}

                </div>

            </div>
        </div>

    );
};

export default FoodCard;