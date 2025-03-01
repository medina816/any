import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css';

function ProductDetail() {
    const { id } = useParams();
    const { products } = useSelector(state => state.products);

    const product = products.find(p => p.id === Number(id));



    return (
        <div className="product-detail-container">
            <div className="product-detail">
                <div className="product-image-container">
                    <img className="product-image" src={product.images} alt={product.title} />
                </div>
                <div className="product-info">
                    <h2 className="product-title">{product.title}</h2>
                    <h3 className="product-price">${product.price}</h3>
                    <p className="product-description">{product.description}</p>
                    <button className="buy-button">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
