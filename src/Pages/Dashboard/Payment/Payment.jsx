import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const StripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)


const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading={'Please Pay To Eat'} heading={'Payment'} />
            <div>
                <Elements stripe={StripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;