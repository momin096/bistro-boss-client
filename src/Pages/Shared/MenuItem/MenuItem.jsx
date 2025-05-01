
const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item || {};
    return (
        <div className="menu-item flex items-center gap-4 mb-6">
            <img src={image} alt='' className="w-20 h-20 object-cover rounded-b-full rounded-tr-full" />
            <div>
                <h4 className="font-medium text-lg text-gray-700">{name} ------------</h4>
                <p className="text-sm text-gray-600">{recipe}</p>
                <span className="text-amber-500 font-semibold">${price}</span>
            </div>
        </div>
    );
};

export default MenuItem;