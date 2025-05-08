import { FaPencilAlt, FaTrash, FaUsers } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (recipe) => {
        console.log(recipe._id);
        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete ${recipe.name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${recipe._id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${recipe.name} has been deleted`,
                        icon: "success"
                    });
                }
                console.log(res.data);

            }
        });
    }
    return (<>
        <SectionTitle subHeading={"Hurry Up!"} heading={'manage all items'} />
        <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Total Items: {menu.length}</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-2">
                    <thead>
                        <tr className="bg-yellow-600 text-white">
                            <th className="p-3 rounded-tl-md">#</th>
                            <th className="p-3">Item Image</th>
                            <th className="p-3">Item Name</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Update</th>
                            <th className="p-3 rounded-tr-md">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((recipe, index) => (
                            <tr key={recipe._id} className="bg-white shadow-sm rounded-md">
                                <td className="p-3 font-medium">{index + 1}</td>
                                <td className="p-3">
                                    <div className="w-12 h-12  rounded-md ">
                                        <img className="object-cover h-12 w-12 rounded-md" src={recipe.image} alt="" />

                                    </div>
                                </td>
                                <td className="p-3">{recipe.name}</td>
                                <td className="p-3">${recipe.price.toFixed(2)}</td>
                                <td className="p-3">
                                    <Link to={`/dashboard/updateItem/${recipe._id}`}>
                                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md">
                                            <FaPencilAlt size={18} />
                                        </button>
                                    </Link>
                                </td>
                                <td className="p-3">
                                    <button
                                        onClick={() => handleDelete(recipe)}
                                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md">
                                        <FaTrash size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>

    );
};

export default ManageItems;