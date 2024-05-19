import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const MyCart = () => {
    const [axiosSecure] = useAxiosSecure()
    const [cart, refetch] = useCart()
    refetch()


    const handleDelete = item => {

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // fetch(`http://localhost:5000/carts/${item._id}`, {
                //     method: 'DELETE'
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         if (data.deletedCount > 0) {
                //             refetch();

                //         }
                //     })

                axiosSecure.delete(`/carts/${item._id}`)
                    .then(function () {
                        refetch()
                        toast.success("Your food item has been deleted.")
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            }
        });


    }


    const totalPrice = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);

    return (
        <section>
            <SectionTitle paragraphTitle="My Cart" headingTitle="WANNA ADD MORE?" />

            <div className="m-10">


                <div className="p-10 bg-white">

                    <div className="flex justify-around mb-5">
                        <h2 className="text-3xl">Total Orders: {cart.length} </h2>
                        <h2 className="text-3xl">Total Price:  {totalPrice.toFixed(2)} </h2>
                        <Link to={'/dashbord/checkout'}><button className="bg-slate-400 py-2 px-4 rounded text-white font-bold">CheckOut</button></Link>
                    </div>

                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-center">
                                        <th>
                                            Serial
                                        </th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th> Action</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {
                                        cart.map((item, index) => <tr key={item._id} className="text-center">
                                            <th>
                                                {index + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className=" w-12">
                                                            <img src={item?.image} alt={item?.name} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>{item?.price}</td>
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost "><FaTrashAlt className="text-xl" /></button>
                                            </th>
                                        </tr>)
                                    }

                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>

            </div>



        </section>
    );
};

export default MyCart;