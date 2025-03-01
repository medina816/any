import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css';

function CatDetail() {
    const { id } = useParams();
    const { categories, loading, error } = useSelector((state) => state.deal);

    const cat = categories.find(category => category.id === parseInt(id));


    return (
        <div className="category-detail-container">
            <div className="category-detail">
                {cat ? (
                    <div className="category-info">
                        <h2 className="category-title">{cat.name}</h2>
                        {cat.image && <img className="category-image" src={cat.image} alt={cat.name} />}
                        {cat.description && <p className="category-description">{cat.description}</p>}
                        <Link to="/service" className="back-link">Назад к категориям</Link>
                    </div>
                ) : (
                    <div className="category-not-found">
                        <p>Категория не найдена</p>
                        <Link to="/service" className="back-link">Назад к категориям</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CatDetail;
