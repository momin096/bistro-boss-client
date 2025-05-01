import React from 'react';

const FoodCard = ({ item }) => {
    const { _id, image, price, recipe, name } = item || {};

    const handleAddToCart = (food) => {
        // Handle adding the item to the cart here
        console.log(`Adding ${food.name} to cart ${food._id}`);
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
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-neutral text-black rounded-xl hover:text-white  border-orange-400 hover:border-black border-0 border-b-4 btn-outline">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;