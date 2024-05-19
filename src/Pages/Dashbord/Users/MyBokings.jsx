import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";


const MyBokings = () => {

    const [cart, refetch] = useCart()
    refetch()


    const handleDelete = item => {

        fetch(`https://food-restorent-server.onrender.com/carts/${item._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();

                }
            })

    }
    return (
        <section>
            <SectionTitle paragraphTitle="Excellent Ambience" headingTitle="MY BOOKINGS" />
            <div className="m-10">


                <div className="p-10 bg-white">


                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-center">
                                        <th>
                                            Serial
                                        </th>
                                        <th>Email</th>
                                        <th>Date</th>
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

export default MyBokings;