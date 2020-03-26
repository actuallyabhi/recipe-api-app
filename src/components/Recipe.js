import React from 'react'

const Recipe = ({ title, calories, img }) => (
    <div>
        <h2>{title}</h2>
        <h6>{calories}</h6>
        <img src={img} alt="res-img" />
        
    </div>
);

export default Recipe;