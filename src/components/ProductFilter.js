import styles from '../styles/ProductFilter.module.css';

const ProductFilter = ({ category, setCategory }) => (
  <div className={styles.filterContainer}>
    {['All', 'Electronics', 'Clothing', 'Groceries'].map(cat => (
      <button
        key={cat}
        onClick={() => setCategory(cat)}
        className={`${styles.button} ${category === cat ? styles.activeButton : ''}`}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default ProductFilter;