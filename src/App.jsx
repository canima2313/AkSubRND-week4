import { useEffect, useState } from 'react'
import './App.css'
import ProductContainer from './ProductContainer.jsx'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchdata = async() => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  if (loading) return <p className='loading'>Loading...</p>;

  return (
    <>
      <section className='header'>
        <div className="navbar">
          <a href="#prod">Products</a>
          <a href="">Inspiration</a>
          <a href="">Service</a>
          <a href="">Support</a>
        </div>
        <div className="center">
          <h1>Your one-Stop Shop for Everyday Essentials and Unique Finds.</h1>
          <p>Explore a seamless shopping experience with fast delivery, exceptional customer service, and exclusive deals that make every purchase worthwhile. Shop smart, shop easy, shop with ShopSphere!</p>
        </div>
        <div className="bottom">
          <span className="cat">
            <button className='btn1'>Categories</button>
            <span className="somecat">
              <a href="">Men</a>
              <a href="">Women</a>
              <a href="">Accessories</a>
              <a href="">Sale</a>
            </span>
          </span>
          <button className='btn1'>Contact Us</button>
        </div>
      </section>

      <section id='prod' className='product-container'>
        <ProductContainer data={data} query={query} setQuery={setQuery}/>
      </section>
    </>
  )
}

export default App
