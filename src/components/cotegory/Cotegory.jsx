import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/categories/categoriesSlice';
import { Link } from 'react-router-dom';
import './cotegory.css';

function Category() {
    const dispatch = useDispatch();
    const { list: categories, loading, error } = useSelector((state) => state.categories);


    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading categories</div>;

    return (
        <div className="horizontal-scroll-container">
            <div className="horizontal-scroll">
                {categories.map((item) => (
                    <div key={item.id} className="scroll-item">
                        <Link to={`/category/${item.id}`}>
                            <img src={item.image} alt={item.name} />
                        </Link>
                        <p>{item.name}</p>
                        <Link to={`/category/${item.id}`}>View products</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
