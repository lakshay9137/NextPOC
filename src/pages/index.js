import { useState, useEffect } from 'react';
import { fetchProducts } from '../lib/api';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import styles from '../styles/HomePage.module.css';

const HomePage = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === category));
    }
  }, [category, products]);

  return (
    <div className="container">
      <h1>Product List</h1>
      <ProductFilter category={category} setCategory={setCategory} />
      <div className={styles.productList}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: { products },
    revalidate: 60
  };
}

export default HomePage;