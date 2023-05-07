import React from 'react';
import { PRODUCTS } from './../../products';
import Product from './product';

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>TECh Shop</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => (
          <Product data={product}/>
        ))}
      </div>
    </div>
  )
}

export default Shop
