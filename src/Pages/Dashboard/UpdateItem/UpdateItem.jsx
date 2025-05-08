import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { TbBowlSpoonFilled } from "react-icons/tb";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {
    const item = useLoaderData();
    const { register, handleSubmit, } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        let imageURL = item.image; // fallback to existing image

        if (data.image && data.image.length > 0) {
            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                imageURL = res.data.data.display_url;
            }
        }

        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: imageURL
        };

        const { data: patchMenu } = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
        if (patchMenu.modifiedCount > 0) {
            toast.success(`${menuItem.name} Updated!`);
        }
        console.log(patchMenu);
    };



    return (
        <div>
            <SectionTitle heading={'Update Item'} subHeading={'Refresh'} />
            <section>
                <div className="max-w-5xl mx-auto p-10 bg-gray-50 rounded-md flex items-center justify-center ">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4 w-full">
                        <div>
                            <label className="block text-sm font-medium mb-1">Recipe name*</label>
                            <input
                                defaultValue={item.name}
                                {...register('name')}
                                type="text"
                                placeholder="Recipe name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400 bg-white"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Category*</label>
                                <select
                                    defaultValue={item.category}
                                    {...register('category')}
                                    className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400">
                                    <option className="hidden">Category</option>
                                    <option value={'salad'}>Salad</option>
                                    <option value={'pizza'}>Pizza</option>
                                    <option value={'dessert'}>Dessert</option>
                                    <option value={'soup'}>Soup</option>
                                    <option value={'drinks'}>Drinks</option>
                                </select>

                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Price*</label>
                                <input
                                    defaultValue={item.price}
                                    {...register('price')}
                                    type="number"
                                    placeholder="Price"
                                    step={'any'}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400 bg-white"
                                />

                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Recipe Details*</label>
                            <textarea
                                defaultValue={item.recipe}
                                {...register('recipe')}
                                placeholder="Recipe Details"
                                className="w-full px-4 py-2 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400 resize-none bg-white"
                            ></textarea>

                        </div>

                        <div className="flex items-center gap-4">
                            <input type="file" {...register('image')} className="file-input " />
                        </div>

                        <button
                            type="submit"
                            className="bg-yellow-700 hover:bg-yellow-800 text-white px-6 py-2 rounded-md flex items-center gap-2"
                        >
                            Update <TbBowlSpoonFilled />

                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default UpdateItem;