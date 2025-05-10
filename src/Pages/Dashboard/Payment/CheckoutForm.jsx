import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { user } = useAuth();
    const navigate = useNavigate();
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error ', error);
            toast.error(error.message)
            setError(error.message)
        } else {
            console.log('Payment Method', paymentMethod);
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if (confirmError) {
            console.log(confirmError);
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('TXID ->>', paymentIntent.id);
                setTransactionId(paymentIntent.id)

                // save the payment in db
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    foodIds: cart.map(item => item.foodId),
                    status: 'pending',

                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res.data);
                if (res.data.deleteResult.deletedCount > 0) {
                    refetch();
                }
                if (res.data.paymentResult.insertedId) {
                    toast.success('Payment Success!!')
                    navigate('/dashboard/payment-history')
                }
            }

        }

    }
    return (
        <div>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-primary" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {
                    error && <p className="text-red-600">{error}</p>
                }
                {
                    transactionId && <p className="text-green-800">Your TXID is : <span className="text-green-900 font-bold">{transactionId}</span></p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;