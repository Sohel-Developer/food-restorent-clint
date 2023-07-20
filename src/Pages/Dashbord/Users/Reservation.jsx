import { FaCalendarAlt } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const Reservation = () => {
    return (
        <section className="p-10">
            <SectionTitle paragraphTitle="Reservation" headingTitle="Book A Table" />

            <div>
                <form className="space-y-5 my-10">
                    <div className="flex gap-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Date*</span>
                            </label>
                            <input type="date" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Time*</span>
                            </label>
                            <input type="time" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Guest*</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Selected  Persone</option>
                                <option>1 Person</option>
                                <option>2 Person</option>
                                <option>3 Person</option>
                                <option>4 Person</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name*</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone*</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" placeholder="password" className="input input-bordered" />

                        </div>

                    </div>
                    <span className="cursor-pointer py-4 px-8 bg-gray-500 rounded-lg flex items-center gap-2">
                        <input type="submit" className=" text-white text-xl font-semibold " value="Add Item" />
                        <FaCalendarAlt className="text-white text-xl" />
                    </span>
                </form>
            </div>

        </section>
    );
};

export default Reservation;