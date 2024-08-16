import { FaStar, FaTag, FaCalendarAlt, FaBoxOpen, FaStore } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    return (
        <div className="p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 bg-white">
            <h2 className="text-2xl font-bold text-blue-600 mb-3 flex items-center">
                <FaTag className="mr-2 text-blue-500" />
                {product?.name}
            </h2>
            <img src={product?.image} alt={product?.name} className="w-full h-56 object-cover rounded-lg mb-5" />
            <p className="text-gray-600 mb-4">{product?.description}</p>
            <p className="text-xl font-bold text-blue-600 mb-3">${product?.price}</p>
            <div className="text-gray-600 space-y-2">
                <p className="flex items-center">
                    <FaBoxOpen className="mr-2 text-blue-500" />
                    <span>Category:</span> <span className="ml-1 text-gray-800 font-medium">{product?.category}</span>
                </p>
                <p className="flex items-center">
                    <FaStore className="mr-2 text-blue-500" />
                    <span>Brand:</span> <span className="ml-1 text-gray-800 font-medium">{product?.brand}</span>
                </p>
                <p className="flex items-center">
                    <FaStar className="mr-2 text-blue-500" />
                    <span>Ratings:</span> <span className="ml-1 text-gray-800 font-medium">{product?.ratings}</span>
                </p>
                <p className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-blue-500" />
                    <span>Date Added:</span> <span className="ml-1 text-gray-800 font-medium">{new Date(product?.creationDate).toLocaleDateString()}</span>
                </p>
            </div>
        </div>
    );
};

export default ProductCard;