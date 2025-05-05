import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const { signIn, setLoading, loginWithGoogle } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        loadCaptchaEnginge(6, false, 'white', 'black');
    }, []);


    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success('Login successful!');
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            });

    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) === true) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">

                {/* Left Side - Illustration */}
                <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
                    <img
                        src="https://cdn.pixabay.com/photo/2021/01/19/20/28/restaurant-5932752_960_720.png"
                        alt="Illustration"
                        className="max-h-80 md:max-h-[400px]"
                    />
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Type here" className="input input-bordered w-full" />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Enter your password" className="input input-bordered w-full" />
                        </div>

                        {/* Captcha */}
                        <div>
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha} name="captcha" type="text" placeholder="Type captcha here" className="input input-bordered w-full mt-2" />
                            {/* <button type="button" onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button> */}
                        </div>

                        {/* Sign In Button */}
                        <button disabled={disabled} type="submit" className="btn btn-primary w-full mt-4">Sign In</button>
                    </form>

                    {/* Create New Account */}
                    <p className="text-center mt-4 text-sm">
                        New here?{" "}
                        <Link to={'/register'} className="link text-orange-500">Create a New Account</Link>
                    </p>

                    {/* Divider */}
                    <div className="divider">Or sign in with</div>

                    {/* Social Login */}
                    <div className="flex justify-center gap-4">
                        <SocialLogin />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
