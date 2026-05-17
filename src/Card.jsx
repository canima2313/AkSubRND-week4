import { useState } from "react";
import './Card.css';

function Card({product}){
    const [rating, setRating] = useState(0);

    return(
        <>
            <section className="card-container">
                <img src={product.image} alt={product.title} />
                <div className="text-container">
                    <p className="category">{product.category}</p>
                    <h3 className="prod-name">{product.title}</h3>
                    <div className="rating">
                        
                        <p className="n-rating">({product.reviews})</p>
                    </div>
                    <p className="price">${product.price}</p>
                </div>
            </section>
        </>
    )
}

export default Card