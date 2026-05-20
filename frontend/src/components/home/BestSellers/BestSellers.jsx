import { bestSellers } from '../../../data/productsData';
import styles from './BestSellers.module.css';
import Button from '../../common/Button/Button';
import ArrowIcon from '../../../assets/icons/arrow-btn.svg?react';

const BestSellers = () => (
  <section className={styles.section}>
    <div className={styles.header}>
      <h2 className={styles.title}>Best Sellers</h2>
      <p className={styles.subtitle}>Contemporary clothing crafted for everyday confidence.</p>
    </div>

    <div className={styles.grid}>
      {bestSellers.slice(0, 4).map((product) => (
        <article
          key={product.id}
          className={styles.card}
          style={{ backgroundImage: product.backgroundImage ? `url(${product.backgroundImage})` : 'none' }}
        >
          <div className={styles.textBlock}>
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.productPrice}>$ {product.price.toFixed(2)}</p>
            <button className={styles.buyButton} type='button'>
              <Button variant='light' size='sm'>
                Shop Now
              </Button>
            </button>
          </div>
          <div className={styles.imageWrapper}>
            <img src={product.image} alt={product.name} />
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default BestSellers;
