import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const ManageBokings = () => {
    return (
        <div className="m-10">
            <SectionTitle paragraphTitle="Check Items" headingTitle="MANAGE ALL ITEMS" />

            <div className="p-10 bg-white">

                <h2>Total Items: </h2>

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
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="text-center">
                                    <th>
                                        1
                                    </th>
                                    <td>
                                        Email
                                    </td>
                                    <td>
                                        Date
                                    </td>
                                    <td>

                                        <select defaultValue="Pending" className="">
                                            <option defaultValue="Pending" disabled >Pending</option>
                                            <option defaultValue="Approved">Approved</option>
                                            <option defaultValue="Delevery Process">Delevery Process</option>
                                            <option defaultValue="Complete">Complete</option>
                                        </select>

                                    </td>

                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ManageBokings;