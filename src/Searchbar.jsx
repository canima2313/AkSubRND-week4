import { useState } from 'react'
import './Searchbar.css'

function Searchbar({query, setQuery}){
    return(
        <section className='searchbar'>
            <input type="text" placeholder='Search Products' onChange={e => setQuery(e.target.value)}/>
            <button>Search</button>
        </section>
    )
}

export default Searchbar