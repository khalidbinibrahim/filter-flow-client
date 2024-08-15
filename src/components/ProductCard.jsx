const ProductCard = ({product}) => {
    return (
        <div className="p-4 border rounded mb-4">
            <h2 className="text-lg font-semibold">{product?.name}</h2>
            <img src={product?.image} alt={product?.name} className="w-full h-48 object-cover" />
            <p>{product?.description}</p>
            <p className="font-bold">${product?.price}</p>
            <p>Category: {product?.category}</p>
            <p>Brand: {product?.brand}</p>
            <p>Ratings: {product?.ratings}</p>
            <p>Date Added: {new Date(product?.creationDate).toLocaleDateString()}</p>
        </div>
    );
};

export default ProductCard;