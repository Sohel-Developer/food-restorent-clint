import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useUsersData from "../../../Hooks/useUsersData";


const AllUsers = () => {

    const [users, refetch] = useUsersData()
    // console.log(users);

    return (
        <div className="m-10">
            <SectionTitle paragraphTitle="Check Items" headingTitle="MANAGE ALL ITEMS" />

            <div className="p-10 bg-white">

                <h2>Total Users: </h2>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-center">
                                    <th>
                                        Serial
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>



                                {
                                    users.map((user, index) => <tr key={user._id} className="text-center">
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            {user.Name}
                                        </td>
                                        <td>
                                            {user.Email}
                                        </td>
                                        <td><button className="btn btn-ghost "><FaUsers className="text-xl" /></button></td>
                                        <th>

                                            <button className="btn btn-ghost "><FaTrashAlt className="text-xl" /></button>
                                        </th>
                                    </tr>)
                                }




                                {/* row 1 */}
                                {/* <tr className="text-center">
                                    <th>
                                        {users.length + 1}
                                    </th>
                                    <td>
                                        {users.Name}
                                    </td>
                                    <td>
                                        {users.Email}
                                    </td>
                                    <td><button className="btn btn-ghost "><FaUsers className="text-xl" /></button></td>
                                    <th>
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

export default AllUsers;