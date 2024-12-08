import styles from '../styles/ProductCard.module.css';
import Link from 'next/link';

const ProductCard = ({ product }) => (
  <div className={styles.card}>
    <h2>{product.name}</h2>
    <p>${product.price}</p>
    <p>{product.category}</p>
    <Link href={`/products/${product.id}`}>
      <button className={styles.viewButton}>View Details</button>
    </Link>
  </div>
);

export default ProductCard;