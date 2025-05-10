import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-semibold">Hi, Welcome <span>{user?.displayName}</span></h1>

            {/* Top Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-purple-500/70 to-pink-200/50 text-white px-6 py-8 rounded-lg shadow-md flex flex-col items-center">
                    <i className="text-3xl mb-2">💼</i>
                    <p className="text-2xl font-bold">205</p>
                    <p>Menu</p>
                </div>

                <div className="bg-gradient-to-r from-yellow-700/70 to-yellow-200/50 text-white px-6 py-8 rounded-lg shadow-md flex flex-col items-center">
                    <i className="text-3xl mb-2">🏬</i>
                    <p className="text-2xl font-bold">103</p>
                    <p>Shop</p>
                </div>

                <div className="bg-gradient-to-r from-pink-600/70 to-pink-200/50 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <i className="text-3xl mb-2">📞</i>
                    <p className="text-2xl font-bold">03</p>
                    <p>Contact</p>
                </div>
            </div>

            {/* Profile and Activities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-100 flex flex-col items-center justify-center p-6 rounded-lg">
                    <div className="avatar">
                        <div className="w-34 rounded-full ring ring-orange-300 ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt="Profile" />
                        </div>
                    </div>
                    <p className="mt-4 font-semibold text-lg">{user?.displayName}</p>
                </div>

                <div className="bg-yellow-100 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Your Activities</h2>
                    <ul className="space-y-2">
                        <li><span className="text-blue-600 font-medium">🛒 Orders:</span> <span className="text-blue-600">6</span></li>
                        <li><span className="text-green-600 font-medium">⭐ Reviews:</span> <span className="text-green-600">2</span></li>
                        <li><span className="text-yellow-600 font-medium">📅 Bookings:</span> <span className="text-yellow-600">1</span></li>
                        <li><span className="text-orange-600 font-medium">💳 Payment:</span> <span className="text-orange-600">3</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
