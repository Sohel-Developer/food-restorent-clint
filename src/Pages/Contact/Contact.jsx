import Cover from "../../Component/Cover/Cover";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";

import { useForm } from 'react-hook-form';

import contactImage from "../../assets/contact/banner.jpg"
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaTelegramPlane } from "react-icons/fa";

const Contact = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (

        <div>
            <Cover image={contactImage} heading="Contact Us" />


            <section>
                <div className="container">
                    <SectionTitle headingTitle="Our Location" paragraphTitle="Visit Us" />

                    <div className="grid md:grid-cols-3 gap-20 my-20 ">
                        <div className="border rounded-md ">
                            <div className="bg-[#D1A054] py-6 flex justify-center text-white">
                                <FaPhoneAlt className="text-2xl" />
                            </div>
                            <div className="bg-gray-100 m-4 mt-0 py-16 text-center">
                                <p>Phone</p>
                                <span>+38 (012) 34 56 789</span>

                            </div>
                        </div>

                        <div className="border rounded-md ">
                            <div className="bg-[#D1A054] py-6 flex justify-center text-white">
                                <FaMapMarkerAlt className="text-2xl" />
                            </div>
                            <div className="bg-gray-100 m-4 mt-0 py-16 text-center">
                                <p>Phone</p>
                                <span>+38 (012) 34 56 789</span>

                            </div>
                        </div>

                        <div className="border rounded-md ">
                            <div className="bg-[#D1A054] py-6 flex justify-center text-white">
                                <FaClock className="text-2xl" />
                            </div>
                            <div className="bg-gray-100 m-4 mt-0 py-16 text-center">
                                <p>Phone</p>
                                <span>+38 (012) 34 56 789</span>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact Us */}

            <section>

                <div className="container">
                    <SectionTitle paragraphTitle="Send Us A Message" headingTitle="Contact Form" />


                    <div className="my-20 bg-gray-100 py-20 px-20 rounded-lg">


                        <form className=" space-y-10" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex gap-10">
                                <input type="text" placeholder="Your Name" {...register("name", { required: true, maxLength: 80 })} className="input input-bordered w-full" />
                                <input type="email" className="input input-bordered w-full" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                            </div>
                            <input type="tel" className="input input-bordered w-full" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                            <textarea className="textarea textarea-bordered w-full" placeholder="Your Message" {...register("Message", { required: true })}>

                            </textarea>
                            <div className="flex  cursor-pointer bg-gray-700 py-4 px-12 rounded-lg justify-center items-center gap-2">
                                <input className=" text-white font-semibold" type="submit" /> <FaTelegramPlane className="text-white" />
                            </div>
                        </form>


                    </div>
                </div>

            </section>
        </div>
    );
};

export default Contact;