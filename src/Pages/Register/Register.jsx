import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";


const Register = () => {
    // const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const { createUser, updateUserProfile, loginWithGoogle } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        const { name, email, password } = data;
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success('Registration successful!');
                updateUserProfile(name, data.photoURL)
                    .then(() => {
                        toast.success('User profile updated successfully!');
                        <Navigate to={'/'}></Navigate>
                    })
                    .catch((error) => {
                        toast.error('Failed to update user profile!', error.message);

                    });
            })
            .catch(error => {
                // console.log(error.message);
                toast.error(error.message);
            });
    }


    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success('Login successful!');
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message);
            })
    }




    // const handleLogin = (e) => {
    //     e.preventDefault();

    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const name = form.name.value;

    //     createUser(email, password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);
    //             // Add additional logic here, like saving user info to the database
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         });
    // }

    // const handleValidateCaptcha = () => {
    //     const user_captcha_value = captchaRef.current.value;
    //     if (validateCaptcha(user_captcha_value) === true) {
    //         setDisabled(false);
    //     }
    //     else {
    //         setDisabled(true);
    //     }

    // }

    return (<>
        <Helmet>
            <title>Bistro Boss | Register</title>
        </Helmet>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="flex flex-col md:flex-row-reverse w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">

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
                    <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input name="name" {...register('name', { required: true })} type="text" placeholder="Your Full Name" className="input input-bordered w-full" />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        {/* Photo url */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Photo URL</span>
                            </label>
                            <input name="name" {...register('photoURL', { required: true })} type="url" placeholder="Photo URL" className="input input-bordered w-full" />
                            {errors.photoURL && <span className="text-red-500">PhotoURL is required</span>}
                        </div>
                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input name="email" {...register('email', { required: true })} type="email" placeholder="Your Email" className="input input-bordered w-full" />
                            {errors.email && <span className="text-red-500">Email is Required</span>}

                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input name="password" {...register('password', {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}/,

                            })} type="password" placeholder="Enter Password" className="input input-bordered w-full" />
                            {errors.password && <span className="text-red-500">Password must be between 6 and 20 characters One Uppercase one Lowercase & one special character</span>}
                            {errors.minLength && <span className="text-red-500">Password at least 6 characters</span>}
                            {errors.maxLength && <span className="text-red-500">Password at most 20 characters</span>}


                        </div>

                        {/* Sign In Button */}
                        <input type="submit" className="btn btn-primary w-full mt-4" value="Sign Up" />
                        {/* <button type="submit" >Sign In</button> */}
                    </form>

                    {/* Create New Account */}
                    <p className="text-center mt-4 text-sm">
                        Already have an account?{" "}
                        <Link to={'/login'} className="link text-orange-600">Login</Link>

                    </p>

                    {/* Divider */}
                    <div className="divider">Or sign in with</div>

                    {/* Social Login */}
                    <div className="flex justify-center gap-4">
                        <button className="border-2 border-gray-300 rounded-full p-2 hover:bg-gray-200 transition duration-200">

                            <FaFacebook className="text-2xl" />
                        </button>
                        <button onClick={handleGoogleSignIn} className="border-2 border-gray-300 rounded-full p-2 hover:bg-gray-200 transition duration-200">
                            <FaGoogle className="text-2xl" />
                        </button>

                    </div>
                </div>

            </div>
        </div>
    </>
    );
};

export default Register;
