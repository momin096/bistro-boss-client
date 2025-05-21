import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import SslCommerzPayment from "./SslCommerzPayment";

// Load Stripe
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [selectedMethod, setSelectedMethod] = useState("stripe");

    return (
        <div>
            <SectionTitle subHeading={"Please Pay To Eat"} heading={"Payment"} />

            {/* Dropdown to choose payment method */}
            <div className="mb-6">
                <label className="font-semibold mr-2">Select Payment Method:</label>
                <select
                    value={selectedMethod}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="select select-bordered w-full max-w-xs"
                >
                    <option value="stripe">Stripe</option>
                    <option value="sslcommerz">SSLCommerz</option>
                </select>
            </div>

            {/* Conditional rendering based on payment method */}
            <div>
                {selectedMethod === "stripe" && (
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}

                {selectedMethod === "sslcommerz" && (
                    <SslCommerzPayment />
                )}
            </div>
        </div>
    );
};

export default Payment;
