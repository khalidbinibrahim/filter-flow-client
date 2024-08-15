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
        <div>
            <h1>Product List</h1>
            <div>
                <input type="text" name="search" value={filters.search} onChange={handleFilterChange} placeholder="Search by name" />
                <select name="category" value={filters.category} onChange={handleFilterChange}>
                    <option value="">All Categories</option>
                </select>
                <select name="brand" value={filters.brand} onChange={handleFilterChange}>
                    <option value="">All Brands</option>
                </select>
                <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
                <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
                <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}>
                    <option value="creationDate">Date Added</option>
                    <option value="price">Price</option>
                </select>
                <select name="order" value={filters.order} onChange={handleFilterChange}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </div>
            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product}/>
                ))}
            </div>
            <div>
                <button onClick={() => handlePageChange(filters.page - 1)} disabled={filters.page <= 1}>Previous</button>
                <span> Page {filters.page} of {totalPages} </span>
                <button onClick={() => handlePageChange(filters.page + 1)} disabled={filters.page >= totalPages}>Next</button>
            </div>
        </div>
    );
};

export default ProductList;