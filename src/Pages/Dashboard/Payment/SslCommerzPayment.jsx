import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const SslCommerzPayment = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleCreatePayment = async () => {
        const payment = {
            email: user?.email,
            price: totalPrice,
            transactionId: '',
            date: new Date(),
            cartIds: cart.map(item => item._id),
            menuIds: cart.map(item => item.foodId),
            status: 'pending'
        }
        console.log('payment', payment);

        const response = await axiosSecure.post('/create-ssl-payment', payment)
        console.log(response);
        if (response?.data?.gatewayUrl) {
            window.location.replace(response.data.gatewayUrl)
        }
    }

    console.log(cart);
    return (
        <div>
            <div>
                <p className="text-lg font-medium mb-4">SSLCommerz Payment Button</p>
                <button
                    onClick={handleCreatePayment}
                    className="btn btn-primary">Pay with SSLCommerz</button>
            </div>
        </div>
    );
};

export default SslCommerzPayment;