import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { CartesianGrid } from 'recharts';

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    const { revenue, menuItems, users, orders } = stats || {};

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data
        }
    })



    const dataBar = [
        { name: 'Dessert', sold: 30 },
        { name: 'Pizza', sold: 35 },
        { name: 'Salad', sold: 20 },
        { name: 'Soup', sold: 25 },
    ];

    const dataPie = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    return (
        <div>
            <div className="p-6 space-y-6">
                <h1 className="text-2xl font-serif font-semibold">Hi, Welcome Back!</h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-300 text-white p-5 rounded-xl shadow">
                        <div className="text-2xl font-bold">{revenue}</div>
                        <div>Revenue</div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-200 text-white p-5 rounded-xl shadow">
                        <div className="text-2xl font-bold">{users}</div>
                        <div>Customers</div>
                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-pink-200 text-white p-5 rounded-xl shadow">
                        <div className="text-2xl font-bold">{menuItems}</div>
                        <div>Products</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white p-5 rounded-xl shadow">
                        <div className="text-2xl font-bold">{orders}</div>
                        <div>Orders</div>
                    </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>


                    <div className="bg-white p-4 rounded-lg shadow">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={dataPie}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={100}
                                    dataKey="value"
                                >
                                    {dataPie.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;