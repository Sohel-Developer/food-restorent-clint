import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const UpdateItem = () => {
    return (
        <section>
            <div>
                <SectionTitle paragraphTitle="Update Check" headingTitle="Update Item" />

                <form className="p-10 space-y-4 bg-gray-100 m-10 rounded-lg">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name" className="input input-bordered" />

                    </div>
                    <div className="flex w-full gap-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Chose Category</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soups</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />

                        </div>

                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Your Message" >

                        </textarea>

                    </div>
                    <div className="flex flex-col items-start space-y-4">
                        <input type="file" className="file-input w-full max-w-xs" />

                        <span className="cursor-pointer py-4 px-8 bg-gray-500 rounded-lg flex items-center gap-2">
                            <input type="submit" className=" text-white text-xl font-semibold " value="Update Item" />
                            <FaUtensils className="text-white text-xl" />
                        </span>
                    </div>




                </form>
            </div>

        </section>
    );
};

export default UpdateItem;