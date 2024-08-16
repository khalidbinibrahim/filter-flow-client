const ProductCard = ({ product }) => {
    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 mb-4 bg-white">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product?.name}</h2>
            <img src={product?.image} alt={product?.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-600 mb-4">{product?.description}</p>
            <p className="text-lg font-bold text-gray-800 mb-2">${product?.price}</p>
            <p className="text-gray-500">Category: <span className="text-gray-700 font-medium">{product?.category}</span></p>
            <p className="text-gray-500">Brand: <span className="text-gray-700 font-medium">{product?.brand}</span></p>
            <p className="text-gray-500">Ratings: <span className="text-gray-700 font-medium">{product?.ratings}</span></p>
            <p className="text-gray-500">Date Added: <span className="text-gray-700 font-medium">{new Date(product?.creationDate).toLocaleDateString()}</span></p>
        </div>
    );
};

export default ProductCard;