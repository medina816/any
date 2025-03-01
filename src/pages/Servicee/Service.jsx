import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/deal/dealSlice';
import { Link } from 'react-router-dom';
import '../styles.css';

function Service() {
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector((state) => state.deal);  

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="container">
    
            {categories.map(category => (
                <div className="category-item" key={category.id}>
                    <h3>{category.name}</h3>
                    <Link to={`/cat/${category.id}`}>
                        <img 
                            src={category.image} 
                            alt={category.name} 
                            onError={(e) => e.target.src = 'default-image.jpg'} 
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Service;
