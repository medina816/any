import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProducts, clearProducts } from '../../redux/categoryProduct/categoryProductsSlice';
import './categoryProducts.css';

function CategoryProducts() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { products, loading, error } = useSelector((state) => state.categoryProducts);
    
    useEffect(() => {
        dispatch(getCategoryProducts(id));
        return () => dispatch(clearProducts()); 
    }, [dispatch, id]);

   
    if (loading) return <div>Loading products...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="products">
            <h2>Products in Category {id}</h2>
            <div className="products-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.images[0]} alt={product.title} />
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryProducts;
