import { useState } from 'react'
import './Searchbar.css'

function Searchbar({query, setQuery}){
    const [temp, setTemp] = useState('');

    function submit(){
        setQuery(temp);
    }

    return(
        <section className='searchbar'>
            <input
                type="text"
                placeholder='Search Products'
                value={temp}
                onChange={e => setTemp(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && submit()}
            />
            <button onClick={submit}>Search</button>
        </section>
    )
}

export default Searchbar