import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import ProductOptions from '../ProductOptions/ProductOptions';
import ProductImage from '../ProductImage/ProductImage';

const Product = props => {
  const [currentColor, setColor] = useState(`${props.colors[0]}`);
  const [currentSize, setSize] = useState(`${props.sizes[0].name}`);


  const getPrice = useMemo(() => {
    for (let size of props.sizes) {
      if (size.name === currentSize) {
        return props.basePrice + size.additionalPrice
      }
    }
  }, [currentSize, props.basePrice, props.sizes]);


  const addToShoppingCart = (e) => {
    e.preventDefault();
    props.action({ id: props.id, title: props.title, size: currentSize, color: currentColor, price: getPrice })
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{`${getPrice}$`}</span>
        </header>
        <ProductOptions
          action={addToShoppingCart}
          setSize={setSize}
          setColor={setColor}
          onSize={props.sizes}
          onColor={props.colors}
          currentColor={currentColor}
          currentSize={currentSize}
        />
      </div>
    </article>
  )
};

export default Product;