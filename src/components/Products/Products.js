import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products] = useState(productsData);
  const [shoppingCart, setShoppingCart] = useState('');
  if (shoppingCart) {
    for (let cart of shoppingCart) {
      for (let product in cart) {
        console.log(product, cart[product]);
      }
    }
  }

  const addProdutToShoppingCart = newProduct => {
    setShoppingCart([...shoppingCart, { id: newProduct.id, title: newProduct.title, size: newProduct.size, color: newProduct.color, price: newProduct.price }]);
  }

  return (
    <section>
      {products.map(product => <Product action={addProdutToShoppingCart} key={product.id} {...product}></Product>)}
    </section>
  );
};

export default Products;