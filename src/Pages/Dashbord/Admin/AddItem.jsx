import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useFoodItem from "../../../Hooks/useFoodItem";

const AddItem = () => {
    const [, refetch] = useFoodItem()
    const [axiosSecure] = useAxiosSecure()

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const { name, price, recipe, category, image } = data;
        // image: image[0].name 

        const savedItem = { name, price, recipe, category }

        // fetch('http://localhost:5000/food', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(savedItem)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             refetch(); // refetch cart to update the number of items in the cart

        //             alert("Added your food")
        //         }
        //     })


        axiosSecure.post('/food', savedItem)
            .then(function () {
                toast.success("Your Item Added")
            })
            .catch(function (error) {
                console.log(error);
            });

    }



    // const foodItemAdded= ()=>{

    //     axiosSecure.post('/food', savedItem)
    //     .then(function () {
    //         toast.success("Your Item Added")
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    // }



    return (
        <section>
            <div>
                <SectionTitle paragraphTitle="What's New" headingTitle="Add A Item" />

                <form onSubmit={handleSubmit(onSubmit)} className="p-10 space-y-4 bg-gray-100 m-10 rounded-lg">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="Recipe Name" className="input input-bordered" />

                    </div>
                    <div className="flex w-full gap-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register("category")} defaultValue="Chose Category" className="select select-bordered">
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
                                <span className="label-text">Price</span>
                            </label>
                            <input  {...register("price")} type="text" placeholder="Price" className="input input-bordered" />

                        </div>

                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea  {...register("recipe")} className="textarea textarea-bordered w-full" placeholder="Your Message" >

                        </textarea>

                    </div>
                    <div className="flex flex-col items-start space-y-4">
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />

                        <span className=" bg-gray-500 rounded-lg flex items-center gap-2">
                            <input type="submit" className=" text-white text-xl font-semibold  cursor-pointer py-4 ps-8" value="Add Item" />
                            <FaUtensils className="text-white text-xl mr-8" />
                        </span>
                    </div>




                </form>
            </div>

        </section>
    );
};

export default AddItem;