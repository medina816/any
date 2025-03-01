import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/categories/categorySlice'; 
import { Link } from 'react-router-dom'; 
import './cotegory.css';

function Category() {
    const dispatch = useDispatch();
    const { category, loading, error } = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(getCategories()); 
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading categories</div>;

    return (
        <div className="category">
            {category.map((item) => (
                <div key={item.id} className="item-category">
                    <Link to={`/category/${item.id}`}>
                        <img src={item.image} alt={item.name} />
                    </Link>
                    <p>{item.name}</p>
                    <Link to={`/category/${item.id}`}>View products in the category</Link>
                </div>
            ))}
        </div>
    );
}

export default Category;
