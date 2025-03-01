import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/productsSlice';
import { Link } from 'react-router-dom';
import './general.css';

function General() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="product-list-container">
         
            <div className="product-list">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <Link to={`/product/${product.id}`} className="product-link">
                            <img className="product-image" src={product.images} alt={product.title} />
                        </Link>
                        <div className="product-details">
                            <h2 className="product-title">{product.title}</h2>
                            <h3 className="product-price">${product.price}</h3>
                            <p className="product-description">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default General;
