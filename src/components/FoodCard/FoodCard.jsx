import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { _id, image, price, recipe, name } = item || {};

    const { user } = useAuth();
    const [, refetch] = useCart();

    const axiosSecure = useAxiosSecure();

    const location = useLocation();

    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (user && user.email) {
            // send data to the server
            const cartItem = {
                foodId: _id,
                name,
                image,
                price,
                email: user.email
            };

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success(`${name} added to cart successfully!`);
                        refetch(); // Refetch the cart data after adding an item
                    }

                })
                .catch(error => {
                    console.error('Error adding item to cart:', error);
                });

        } else {
            Swal.fire({
                title: "Your are not logged in",
                text: "Please login to add items to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }


    }


    return (
        <div className="bg-base-100 max-w-80 shadow h-full hover:shadow-xl transition duration-300 rounded-lg overflow-hidden ">
            <figure className="relative">
                <img
                    src={image}
                    alt={name}
                    className="" />
                <p className='text-white text-xl font-medium bg-black/80 absolute top-1 right-1 px-4 py-1 rounded-sm'>$ {price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>

                <div className="card-actions">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-neutral text-black rounded-xl hover:text-white  border-orange-400 hover:border-black border-0 border-b-4 btn-outline">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;