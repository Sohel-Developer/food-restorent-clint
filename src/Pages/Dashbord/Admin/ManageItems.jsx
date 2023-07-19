import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const ManageItems = () => {
    return (
        <div className="m-10">
            <SectionTitle paragraphTitle="Check Items" headingTitle="MANAGE ALL ITEMS" />

            <div className="p-10 bg-white">

                <h2>Total items: </h2>

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
                                <tr className="text-center">
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
                                        Salad
                                    </td>
                                    <td>555TK</td>
                                    <th>
                                        <button className="btn btn-ghost "><FaRegEdit className="text-xl" /></button>
                                        <button className="btn btn-ghost "><FaTrashAlt className="text-xl" /></button>
                                    </th>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ManageItems;