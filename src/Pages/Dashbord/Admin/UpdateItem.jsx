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
                            <select defaultValue className="select select-bordered">
                                <option disabled >Chose Category</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>Soups</option>
                                <option>dessert</option>
                                <option>drinks</option>
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

                        <span className="  bg-gray-500 rounded-lg flex items-center gap-2">
                            <input type="submit" className=" py-4 pl-4  cursor-pointer text-white text-xl font-semibold " value="Update Recipe Details" />
                            <FaUtensils className="text-white text-xl mr-4" />
                        </span>
                    </div>




                </form>
            </div>

        </section>
    );
};

export default UpdateItem;