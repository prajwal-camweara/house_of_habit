import styles from './ProductCard.module.css';
import CartIcon from '../../../assets/icons/cart-add.svg?react';

const ProductCard = ({ name, price, image }) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <img src={image} alt={name} className={styles.image} loading='lazy' />
    </div>
    <div className={styles.productDetails}>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>&#8377; {price.toFixed(2)}</p>
      </div>
      <CartIcon width={42} height={42} />
    </div>
  </div>
);

export default ProductCard;
