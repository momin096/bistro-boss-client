import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {


    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const axiosSecure = useAxiosSecure();

    const handleDelete = (id, name) => {
        // Handle delete action here
        console.log(`Delete item with id: ${id}`);

        Swal.fire({
            title: "Are you sure?",
            text: `
            You want to delete ${name} from your cart?, 
            You won't be able to revert this!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.success(`${name} deleted successfully`);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting item:", error);
                        toast.error("Failed to delete item", error.message);
                    });


            }
        });
    }


    return (
        <div className=" flex justify-center max-h-screen overflow-y-scroll ">
            <div className="w-full max-w-5xl bg-white p-6 rounded">
                {/* Summary Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="text-xl font-semibold">
                        Total Orders: <span className="text-black font-bold">{cart.length}</span>
                    </div>
                    <div className="text-xl font-semibold">
                        Total Price: <span className="text-black font-bold">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded">
                        Pay
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="">
                            <tr className="bg-yellow-600 text-white">
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={item._id} className="border-b">
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="w-12 h-12 bg-gray-300 rounded" >
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => handleDelete(item._id, item.name)}
                                            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded">
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
