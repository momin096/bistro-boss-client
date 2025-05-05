import { FaFacebook, FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success('Login successful!');

                const userInfo = {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                }
                navigate('/');
                // create user in database
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            toast.success('User profile Update successfully!');
                        }
                    })
                    .catch(error => {
                        console.log(error.message);
                        toast.error('Failed to create user profile!');
                    })
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message);

            })
    }

    return (<>
        <button disabled className="border-2 border-gray-300 rounded-full p-2 hover:bg-gray-200 transition duration-200 cursor-not-allowed">
            <FaFacebook className="text-2xl" />
        </button>
        <button onClick={handleGoogleSignIn} className="border-2 border-gray-300 rounded-full p-2 hover:bg-gray-200 transition duration-200">
            <FaGoogle className="text-2xl" />
        </button>
    </>
    );
};

export default SocialLogin;