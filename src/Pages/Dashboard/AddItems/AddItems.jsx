import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const AddItems = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url 
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (res?.data?.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const { data: postMenu } = await axiosSecure.post('/menu', menuItem)
            if (postMenu.insertedId) {
                toast.success(`${menuItem.name} Added`)
            }

        }
    }
    return (
        <div>
            <SectionTitle heading={'add an item'} subHeading={'Whats New ?'} />
            <section>
                <div className="max-w-5xl mx-auto p-10 bg-gray-50 rounded-md flex items-center justify-center ">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4 w-full">
                        <div>
                            <label className="block text-sm font-medium mb-1">Recipe name*</label>
                            <input
                                {...register('name', { required: true })}
                                type="text"
                                placeholder="Recipe name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400 bg-white"
                            />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Category*</label>
                                <select
                                    {...register('category', { required: true })}
                                    className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400">
                                    <option className="hidden">Category</option>
                                    <option value={'salad'}>Salad</option>
                                    <option value={'pizza'}>Pizza</option>
                                    <option value={'dessert'}>Dessert</option>
                                    <option value={'soup'}>Soup</option>
                                    <option value={'drinks'}>Drinks</option>
                                </select>
                                {errors.category && <span className="text-red-500">Category is required</span>}

                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Price*</label>
                                <input
                                    {...register('price', { required: true })}
                                    type="number"
                                    placeholder="Price"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400 bg-white"

                                />
                                {errors.price && <span className="text-red-500">price is required</span>}

                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Recipe Details*</label>
                            <textarea
                                {...register('recipe', { required: true })}
                                placeholder="Recipe Details"
                                className="w-full px-4 py-2 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400 resize-none bg-white"
                            ></textarea>
                            {errors.recipe && <span className="text-red-500">recipe is required</span>}

                        </div>

                        <div className="flex items-center gap-4">
                            <input type="file" {...register('image', { required: true })} className="file-input " />
                            {errors.image && <span className="text-red-500">image is required</span>}

                        </div>

                        <button
                            type="submit"
                            className="bg-yellow-700 hover:bg-yellow-800 text-white px-6 py-2 rounded-md flex items-center gap-2"
                        >
                            Add Item <TbBowlSpoonFilled />

                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddItems;