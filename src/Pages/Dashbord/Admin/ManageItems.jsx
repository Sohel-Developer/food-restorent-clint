import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useFoodItem from "../../../Hooks/useFoodItem";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [foods, refetch] = useFoodItem()
    const [axiosSecure] = useAxiosSecure();


    const handleDelete = itemId => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/food/${itemId}`)
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




    return (
        <div className="m-10">
            <SectionTitle paragraphTitle="Check Items" headingTitle="MANAGE ALL ITEMS" />

            <div className="p-10 bg-white">

                <h2>Total items: {foods.length} </h2>

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
                                {/* row 1 */}

                                {
                                    foods.map((item, indx) => <tr key={item._id} className="text-center">
                                        <th>
                                            {indx + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center justify-center space-x-3">
                                                <div className="avatar">
                                                    <div className=" w-12 rounded-md">
                                                        <img src={item.image} alt="Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>${item.price}</td>
                                        <th>
                                            <Link to={`/dashbord/updateitem/${item._id}`}><button className="btn btn-ghost "><FaRegEdit className="text-xl" /></button></Link>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost "><FaTrashAlt className="text-xl" /></button>
                                        </th>
                                    </tr>)
                                }





                                {/* <tr className="text-center">
                                    <th>
                                        1
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className=" w-12">
                                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        salad
                                    </td>
                                    <td>555TK</td>
                                    <th>
                                        <button className="btn btn-ghost "><FaRegEdit className="text-xl" /></button>
                                        <button className="btn btn-ghost "><FaTrashAlt className="text-xl" /></button>
                                    </th>
                                </tr> */}

                            </tbody>

                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ManageItems;