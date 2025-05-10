import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../Shared/Loading/Loading";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    console.log(payments);

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className="px-4 py-6 max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">
                    Total Payments: <span className="font-bold">{payments.length}</span>
                </h2>

                {/* Desktop Table */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="min-w-full text-left border-collapse text-sm sm:text-base">
                        <thead>
                            <tr className="bg-yellow-600 text-white">
                                <th className="py-3 px-4 font-medium">No.</th>
                                <th className="py-3 px-4 font-medium">Category</th>
                                <th className="py-3 px-4 font-medium">Total Price</th>
                                <th className="py-3 px-4 font-medium">Payment Date</th>
                                <th className="py-3 px-4 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50 transition">
                                    <td className="py-3 px-4 font-semibold">{index + 1}</td>
                                    <td className="py-3 px-4 ">$ {payment.price}</td>
                                    <td className="py-3 px-4 font-semibold">{payment.transactionId}</td>
                                    <td className="py-3 px-4">{payment.date}</td>
                                    <td className="py-3 px-4">{payment.status}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="lg:hidden space-y-4">
                    {payments.map((payment, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
                            <p><span className="font-semibold">No.</span> {index + 1}</p>
                            <p><span className="font-semibold">Price:</span> {payment.price}</p>
                            <p><span className="font-semibold">TXID:</span> {payment.transactionId}</p>
                            <p><span className="font-semibold">Payment Date:</span> {payment.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;