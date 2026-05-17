import { useState } from 'react'
import './ProductContainer.css'
import Searchbar from './Searchbar.jsx'
import Card from './Card.jsx'

function ProductContainer({data, query, setQuery}){
    const filtered = data
        ? data.filter(p =>
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    return(
        <>
            <section className='container'>
                <div className='top'>
                    <h1>Products</h1>
                    <Searchbar query={query} setQuery={setQuery}/>
                </div>
                <div className='products'>
                    {filtered.map(product => (
                        <Card key={product.id} product={product}/>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductContainer