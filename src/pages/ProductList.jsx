import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        brand: '',
        minPrice: '',
        maxPrice: '',
        sortBy: 'creationDate',
        order: 'desc',
        page: 1,
    });

    const categories = ["Electronics", "Clothing", "Home Appliances", "Books", "Sports"];
    const brands = ["Sony", "Samsung", "Nike", "Adidas", "Apple"];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products', { params: filters });
                const { products, totalPages } = response.data;
                setProducts(products);
                setTotalPages(totalPages);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    };

    const handlePageChange = (newPage) => {
        setFilters(prevFilters => ({ ...prevFilters, page: newPage }));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-6">Product List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <input 
                    type="text" 
                    name="search" 
                    value={filters.search} 
                    onChange={handleFilterChange} 
                    placeholder="Search by name" 
                    className="p-2 border border-gray-300 rounded"
                />
                <select 
                    name="category" 
                    value={filters.category} 
                    onChange={handleFilterChange} 
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <select 
                    name="brand" 
                    value={filters.brand} 
                    onChange={handleFilterChange} 
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="">All Brands</option>
                    {brands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>
                <input 
                    type="number" 
                    name="minPrice" 
                    value={filters.minPrice} 
                    onChange={handleFilterChange} 
                    placeholder="Min Price" 
                    className="p-2 border border-gray-300 rounded"
                />
                <input 
                    type="number" 
                    name="maxPrice" 
                    value={filters.maxPrice} 
                    onChange={handleFilterChange} 
                    placeholder="Max Price" 
                    className="p-2 border border-gray-300 rounded"
                />
                <select 
                    name="sortBy" 
                    value={filters.sortBy} 
                    onChange={handleFilterChange} 
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="creationDate">Date Added</option>
                    <option value="price">Price</option>
                </select>
                <select 
                    name="order" 
                    value={filters.order} 
                    onChange={handleFilterChange} 
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard key={product._id} product={product}/>
                ))}
            </div>
            <div className="flex justify-between items-center mt-8">
                <button 
                    onClick={() => handlePageChange(filters.page - 1)} 
                    disabled={filters.page <= 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-lg font-semibold"> Page {filters.page} of {totalPages} </span>
                <button 
                    onClick={() => handlePageChange(filters.page + 1)} 
                    disabled={filters.page >= totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductList;