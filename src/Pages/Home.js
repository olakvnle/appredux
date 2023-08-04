import Navbar from '../Components/Navbar';
import {products} from "../data";
import Cartitems from '../Components/Cartitems';
import "./home.css";
import React from 'react'

function Home() {
  return (
    <>
      <Navbar/>
      <div className='cart-section'>
{products.map((product) => {
  return <Cartitems key = {product.id} {...product} />;
})}
      </div>
    </>
  );
}
export default Home;
