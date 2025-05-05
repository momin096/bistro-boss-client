import { FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdDeleteForever } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();


    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        },
    })


    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete ${user.name}'s account ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        refetch();
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                `${user.name}'s account has been deleted.`,
                                "success"
                            );
                        }
                    })

            }
        });
    }


    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to make ${user.name} an admin ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Add your logic to make the user an admin here
                console.log(`Making ${user.name} an admin...`);
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                "Made Admin!",
                                `${user.name} has been made an admin.`,
                                "success"
                            );
                        }
                    })
            }
        });
    }




    return (
        <div>
            <SectionTitle heading={'manage all users'} subHeading={'How Many ?'} />

            <section>
                <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded-xl">
                    <h2 className="text-2xl font-bold mb-4">Total users: <span className="text-3xl text-gray-700">{users.length}</span></h2>
                    <table className="w-full table-auto ">
                        <thead>
                            <tr className="bg-amber-400 text-white text-left">
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Role</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">
                                        {
                                            user.role === 'admin' ? 'Admin' : <span
                                                onClick={() => handleMakeAdmin(user)}
                                                className="bg-amber-400 text-white px-2 py-2 textxl rounded inline-flex items-center">
                                                <FaUsers />
                                            </span>
                                        }
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => handleDelete(user)}
                                            className="bg-red-600 hover:bg-red-700 text-xl text-white px-2 py-2 rounded">
                                            <MdDeleteForever />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default AllUsers;